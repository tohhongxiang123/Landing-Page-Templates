import Footer from "../Footer";
import TopNavbar from "../TopNavbar";
import Head from 'next/head'
import ActiveLink from "../ActiveLink";

interface LayoutProps {
    title?: string
    children: React.ReactElement | React.ReactElement[]
}

export default function Layout({ children, title = 'Seshuri' }: LayoutProps) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <TopNavbar>
                <ActiveLink href="/templates/1"><p className="cursor-pointer">Template 1</p></ActiveLink>
                <ActiveLink href="/templates/2"><p className="cursor-pointer">Template 2</p></ActiveLink>
                <ActiveLink href="/templates/3"><p className="cursor-pointer">Template 3</p></ActiveLink>
            </TopNavbar>
            {children}
            <Footer className="flex justify-center items-center" />
        </div>
    )
}
