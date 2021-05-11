interface TopNavbarProps {
    children: React.ReactChildren[] | React.ReactElement[] | React.ReactChildren | React.ReactElement
}

export default function TopNavbar({ children }: TopNavbarProps) {
    return (
        <nav>
            <ul className="grid grid-cols-1 grid-flow-col p-6 items-baseline">
                {Array.isArray(children) ? children.map((child, index) => <li key={index}>{child}</li>) : <li>{children}</li>}
            </ul>
        </nav>
    )
}
