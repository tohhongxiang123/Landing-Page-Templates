import Footer from "../Footer";
import TopNavbar from "../TopNavbar";
import Link from 'next/link'
import Head from 'next/head'

interface LayoutProps {
    title?: string
    children: React.ReactElement | React.ReactElement[]
}

export default function StickNavbarLayout({ children, title = 'Business' }: LayoutProps) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <TopNavbar className="sticky top-0">
                <Link href="#"><p className="text-2xl font-bold cursor-pointer">Business</p></Link>
                <Link href="#"><p className="cursor-pointer">Contact Us</p></Link>
            </TopNavbar>
            {children}
            <Footer className="flex justify-center items-center" />
        </div>
    )
}
