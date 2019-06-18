import React from 'react'
import { EditorProvider } from './contexts/Editor'

const Wrapper = ({ children }) => <EditorProvider>{children}</EditorProvider>

export default Wrapper
