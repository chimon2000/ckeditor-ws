import React from 'react'
import { useEditor } from '../contexts'

export function Toolbar() {
    const editor = useEditor()
    const isDisabled = !editor.currentEditor

    return (
        <div>
            <button disabled={isDisabled} onClick={() => editor.executeCommand('bold')}>
                Bold
            </button>
            <button disabled={isDisabled} onClick={() => editor.executeCommand('italic')}>
                Italics
            </button>
            <button disabled={isDisabled} onClick={() => editor.executeCommand('underline')}>
                Underline
            </button>
        </div>
    )
}

export default Toolbar
