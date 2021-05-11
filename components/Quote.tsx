import React from 'react'

interface QuoteProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    quote: string,
    author?: string
}

export default function Quote({ quote, author = '', ...props }: QuoteProps) {
    return (
        <div {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-16 md:w-12 left-0 md:-left-2 absolute top-0 pl-4 md:pl-0 text-gray-300">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.219 1.781-4 4-4zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.219 1.781-4 4-4zM6 16h6v6H6zm14 0h6v6h-6z"></path>
            </svg>
            <blockquote className="mb-8 text-xl text-gray-600">{quote}</blockquote>
            {author && <p className="text-right font-semibold">- {author}</p>}
        </div>
    )
}
