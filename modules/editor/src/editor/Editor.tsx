import React, { useState } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import { useEditor } from '../contexts'

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

type Editor = {
    execute(command: ExecuteCommands): void
}

type EditorProps = {
    onInit?: (editor: any) => void
    onChange?: (event: any, editor: any) => void
    onBlur?: (editor: any) => void
    onFocus?: (editor: any, focusEditor: any) => void
}

export function Editor(props: EditorProps) {
    const [editorRef, setEditorRef] = useState(undefined)
    const editor = useEditor()

    function onInit(editor) {
        setEditorRef(editor)
        props.onInit && props.onInit(editor)
    }

    function handleFocus(focusEditorRef) {
        editor.setCurrentEditor(editorRef)
        props.onFocus && props.onFocus(editorRef, focusEditorRef)
    }

    function handleBlur() {
        props.onBlur && props.onBlur(editorRef)
    }

    return (
        <CKEditor
            editor={DecoupledEditor}
            data="<p>Hello from CKEditor 5!</p>"
            {...props}
            onInit={onInit}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    )
}
