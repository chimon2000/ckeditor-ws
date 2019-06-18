import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Editor, Toolbar } from '@awesome/editor'

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="editor-container">
                <Toolbar />
                <Editor />
            </div>
        </div>
    )
}

export default App
