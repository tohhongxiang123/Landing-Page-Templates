import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
    children: React.ReactNode,
    activeClassName?: string,
    className?: string
}

export default function ActiveLink({ children, activeClassName = "font-bold", className = '', ...props }: ActiveLinkProps) {
    const router = useRouter()
    return (
        <Link {...props}>
            {typeof children === 'string' ? (
            <a className={`${className} ${router.asPath === props.href ? activeClassName : ''}`}>{children}</a>
            ) : (
                <div className={`${className} ${router.asPath === props.href ? activeClassName : ''}`}>{children}</div>
            )}
        </Link>
    )
}
