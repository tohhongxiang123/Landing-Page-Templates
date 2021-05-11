import React from 'react'

interface TitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function Title({ variant = 'h1', children, ...props }: TitleProps) {
    switch(variant) {
        case 'h1':
            return <h1 {...props} className={`text-center font-bold text-5xl lg:text-7xl mb-8 ${props.className}`}>{children}</h1>
        case 'h2':
            return <h2 {...props} className={`text-center font-semibold text-4xl lg:text-6xl mb-4 ${props.className}`}>{children}</h2>
        case 'h3':
            return <h3 {...props} className={`text-center font-semibold text-3xl lg:text-5xl mb-4 ${props.className}`}>{children}</h3>
        case 'h4':
            return <h4 {...props} className={`text-center font-semibold text-2xl lg:text-4xl mb-2 ${props.className}`}>{children}</h4>
        case 'h5':
            return <h5 {...props} className={`text-center font-semibold text-xl lg:text-3xl mb-2 ${props.className}`}>{children}</h5>
        case 'h6':
            return <h6 {...props} className={`text-center font-semibold text-lg lg:text-2xl mb-2 ${props.className}`}>{children}</h6>
        default:
            return <h1 {...props} className={`text-center font-bold text-5xl lg:text-7xl mb-8 ${props.className}`}>{children}</h1>
    }
}
