"use client"
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

interface CodeBlockProps {
    title?: string;
    text?: string;
    language?: string;
    showLineNumbers?: boolean;
    theme?: any;
    wrapLongLines?: boolean;
    children?: React.ReactNode;
    [key: string]: any; // Allow any additional props to be passed through
}

export default function CodeBlock({ 
    title = "1. Interactive Hero Section",
    text = ``,
    language = 'typescript',
    showLineNumbers = true,
    theme = dracula,
    wrapLongLines = true,
    children,
    ...otherProps
}: CodeBlockProps) {
    return (
        <div>
            <h2 className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>{title}</h2>
            <CopyBlock
                text={text}
                language={language}
                showLineNumbers={showLineNumbers}
                theme={theme}
                wrapLongLines={wrapLongLines}
                {...otherProps}
            />
            {children}
        </div>
    )
}