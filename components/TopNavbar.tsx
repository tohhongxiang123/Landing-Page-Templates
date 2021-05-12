interface TopNavbarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    children: React.ReactChildren[] | React.ReactElement[] | React.ReactChildren | React.ReactElement
}

export default function TopNavbar({ children, ...props }: TopNavbarProps) {
    return (
        <nav {...props} className={`z-10 shadow-sm ${props.className}`}>
            <ul className="grid grid-cols-1 grid-flow-col p-6 items-baseline bg-gray-50">
                {Array.isArray(children) ? children.map((child, index) => <li key={index}>{child}</li>) : <li>{children}</li>}
            </ul>
        </nav>
    )
}
