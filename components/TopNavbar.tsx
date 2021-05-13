import Link from 'next/link'
import { useState } from 'react'

interface TopNavbarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    children: React.ReactChildren[] | React.ReactElement[] | React.ReactChildren | React.ReactElement
}

export default function TopNavbar({ children, ...props }: TopNavbarProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav {...props} className={`z-10 shadow-sm ${props.className}`}>
            <ul className="grid grid-cols-1 grid-flow-col p-4 items-center bg-gray-50 gap-x-8">
                <li><Link href="/"><p className="text-2xl font-bold cursor-pointer">Seshuri</p></Link></li>
                {Array.isArray(children) ? children.map((child, index) => <li key={index} className="hidden sm:block">{child}</li>) : <li>{children}</li>}
                <button onClick={() => setIsOpen(c => !c)} type="button" className="inline-flex sm:hidden items-center justify-center p-2 rounded-md" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg> : <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>}
                </button>
            </ul>
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                <ul className="p-4 space-y-1">
                    {Array.isArray(children) ? children.map((child, index) => <li key={index}>
                        {child}
                    </li>) : <li>{children}</li>}
                </ul>
            </div>
        </nav>
    )
}
