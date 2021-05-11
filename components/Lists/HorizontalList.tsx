import React from 'react'

interface HorizontalListProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    children: React.ReactElement[]
}

export default function HorizontalList({ children, ...props }: HorizontalListProps) {
    return (
        <ul {...props} className={`flex flex-row flex-wrap gap-16 justify-center items-center ${props.className}`}>
            {children.map((child, index) => <li key={index}>{child}</li>)}
        </ul>
    )
}
