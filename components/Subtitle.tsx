import React from 'react'

export default function Subtitle({ children, ...props }) {
    return (
        <p className={`opacity-80 text-lg sm:text-3xl tracking-tight font-semibold ${props.className}`}>{children}</p>
    )
}
