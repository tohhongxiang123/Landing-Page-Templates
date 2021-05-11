import React from 'react'

interface ContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    columns?: 1 | 2 | 3
}

export default function Container({ columns = 1, children, ...props }: ContainerProps) {
    return (
        <div {...props} className={`mx-auto p-16 grid grid-cols-1 ${columns === 1 ? 'sm:grid-cols-1' : columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-8 items-center justify-items-center ${props.className}`}>
            {children}
        </div>
    )
}
