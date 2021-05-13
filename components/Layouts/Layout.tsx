import Footer from "../Footer";
import TopNavbar from "../TopNavbar";
import Link from 'next/link'
import Head from 'next/head'

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
                <Link href="#"><p className="cursor-pointer">Contact Us</p></Link>
                <Link href="#"><p className="cursor-pointer">Learn More</p></Link>
            </TopNavbar>
            {children}
            <Footer className="flex justify-center items-center" />
        </div>
    )
}
