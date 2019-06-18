import React, { useState, ReactNode, useContext, createContext, useEffect } from 'react'

export function EditorProvider(props: { children?: ReactNode }) {
    const [currentEditor, setCurrentEditor] = useState<Editor | undefined>()
    const [enabledCommands, setEnabledCommands] = useState<{ [x: string]: boolean }>({})

    useEffect(() => {
        const commandHandlers: { command: string; handler(e): void }[] = []

        if (currentEditor) {
            commands.forEach((command) => {
                commandHandlers.push({ command, handler: handleCommandChanged })
                currentEditor.commands.get(command).on('change', handleCommandChanged)
            })
        }

        return () => {
            if (currentEditor) {
                commandHandlers.forEach(({ command, handler }) =>
                    currentEditor.commands.get(command).off(handler)
                )
            }
        }
    }, [currentEditor])

    const handleCommandChanged = () => {
        const enabledCommands = {}
        if (currentEditor) {
            commands.forEach(
                (command) => (enabledCommands[command] = currentEditor.commands.get(command).value)
            )
        }

        setEnabledCommands(enabledCommands)
    }

    function executeCommand(command: ExecuteCommands, options) {
        if (!currentEditor) return
        console.log(command)
        currentEditor.execute(command, options)
        currentEditor.editing.view.focus()
    }

    return (
        <EditorContext.Provider
            value={{
                currentEditor,
                setCurrentEditor: (editor) => setCurrentEditor(editor),
                executeCommand,
                enabledCommands
            }}>
            {props.children}
        </EditorContext.Provider>
    )
}

export function EditorSubscriber(props: EditorSubscriberProps) {
    const { currentEditor, setCurrentEditor, executeCommand, enabledCommands } = useEditor()

    return props.children({ currentEditor, setCurrentEditor, executeCommand, enabledCommands })
}

export function useEditor() {
    const context = useContext(EditorContext)
    if (!context) {
        throw new Error(`useEditor must be used within a EditorProvider`)
    }

    return context
}

const commands: ExecuteCommands[] = [
    'bold',
    'italic',
    'underline',
    'numberedList',
    'bulletedList',
    'alignment',
    'heading'
]

type EditorSubscriberProps = {
    children(props: InjectedEditorSubscriberProps): JSX.Element | null
}

type InjectedEditorSubscriberProps = EditorContextProps

type EditorContextProps = {
    currentEditor?: Editor
    setCurrentEditor(editor?: Editor): void
    executeCommand(command: ExecuteCommands, options?): void
    enabledCommands: { [x: string]: boolean }
}

export type ExecuteCommands =
    | 'bold'
    | 'italic'
    | 'underline'
    | 'numberedList'
    | 'bulletedList'
    | 'alignment'
    | 'indent'
    | 'outdent'
    | 'heading'

export type Editor = {
    execute(command: ExecuteCommands, options?): void
    editing: { view: { focus(): void } }
    commands: any
}

const EditorContext = createContext<EditorContextProps | undefined>(undefined)
