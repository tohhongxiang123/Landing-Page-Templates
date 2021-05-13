import React from 'react'

interface ContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    columns?: 1 | 2 | 3
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ columns = 1, children, ...props }, ref) => {
    return (
        <div ref={ref} {...props} className={`${props.className} mx-auto py-16 px-8 md:px-16 grid grid-cols-1 ${columns === 1 ? 'md:grid-cols-1' : columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-8 items-center justify-items-center`}>
            {children}
        </div>
    )
})

export default Container
