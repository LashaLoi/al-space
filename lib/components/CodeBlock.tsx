import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

export function CodeBlock({ ...props }) {
  return <SyntaxHighlighter language="ts" {...props} />
}
