import React from 'react'
import Title from './Title'

interface TitleWithDescriptionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    description?: string,
    size?: 'small' | 'large',
    alignment?: 'left' | 'right' | 'center',
}

export default function SmallTitleWithDescription({ title, description = '', size = 'large', alignment = 'center', children, ...props }: TitleWithDescriptionProps) {
    const paragraphClasses = size === 'large' ? 'text-lg leading-relaxed' : 'text-base'
    const alignmentClasses = alignment === 'left' ? 'items-start justify-start text-left' : alignment === 'right' ? 'items-end justify-end text-right' : 'items-center justify-center text-center'
    const widthClasses = size === 'large' ? 'max-w-3xl' : 'max-w-sm'
    
    return (
        <div {...props} className={`flex flex-col ${widthClasses} ${alignmentClasses} ${props.className}`}>
            <Title variant={size === 'large' ? "h1" : "h4"} className={`${size === 'large' ? 'font-bold' : 'font-semibold'} tracking-tight`}>{title}</Title>
            {description && <p className={`${paragraphClasses} text-gray-500 tracking-tight`}>{description}</p>}
            {children}
        </div>
    )
}