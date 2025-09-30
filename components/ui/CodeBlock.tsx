"use client"
import React, { useState, useEffect } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

interface CodeBlockProps {
    title?: string;
    text?: string;
    language?: string;
    showLineNumbers?: boolean;
    theme?: any;
    wrapLongLines?: boolean;
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    mobileOptimized?: boolean;
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
    className = "",
    containerClassName = "",
    mobileOptimized = true,
    ...otherProps
}: CodeBlockProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    // Determine if line numbers should be shown based on mobile optimization and screen size
    const shouldShowLineNumbers = mobileOptimized ? (!isMobile && showLineNumbers) : showLineNumbers;

    return (
        <div className={`w-full max-w-full overflow-hidden px-2 sm:px-4 lg:px-0 ${containerClassName}`}>
            {title && (
                <h2 className='text-center md:tracking-wider mb-2 sm:mb-4 text-xs sm:text-sm md:text-lg lg:text-2xl font-medium break-words hyphens-auto'>
                    {title}
                </h2>
            )}
            <div className="w-full overflow-x-auto rounded-md bg-gray-900 shadow-lg">
                <div className={`code-block-mobile min-w-0 ${className}`}>
                    <CopyBlock
                        text={text}
                        language={language}
                        showLineNumbers={shouldShowLineNumbers}
                        theme={theme}
                        wrapLongLines={wrapLongLines}
                        codeBlock={{
                            ...otherProps.codeBlock,
                            lineNumbers: shouldShowLineNumbers,
                            wrapLines: wrapLongLines,
                        }}
                        {...otherProps}
                    />
                </div>
            </div>
            {children && (
                <div className="mt-2 sm:mt-4">
                    {children}
                </div>
            )}
        </div>
    )
}