import React from 'react'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: 'primary' | 'secondary' | 'none' | 'danger' | 'success'
    variant?: 'default' | 'pill'
}

export default function Button({ color = 'none', variant = 'default', children, ...props }: ButtonProps) {
    const colorClasses = getClassesWithColor(color)
    const variantClasses = getClassesWithVariant(variant)

    return (
        <button {...props} className={`
            ${colorClasses} 
            ${props.disabled ? 'opacity-80' : 'opacity-100'} 
            font-bold py-2 px-4 
            ${variantClasses} 
            ${props.className}
        `}>
            {children}
        </button>
    )
}

function getClassesWithColor(color: ButtonProps['color']) {
    switch(color) {
        case 'primary':
            return 'bg-blue-500 hover:bg-blue-700 text-white'
        case 'secondary':
            return 'bg-gray-300 hover:bg-gray-400 text-gray-800'
        case 'danger':
            return 'bg-red-500 hover:bg-red-700 text-white'
        case 'success':
            return 'bg-green-500 hover:bg-green-600 text-gray-800'
        default:
            return 'bg-transparent hover:bg-gray-200 text-gray-800'
    }
}

function getClassesWithVariant(variant: ButtonProps['variant']) {
    switch(variant) {
        case 'pill':
            return 'rounded-full'
        default:
            return 'rounded'
    }
}
