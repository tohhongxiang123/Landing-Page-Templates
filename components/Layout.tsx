import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div>
            <TopNavbar>
                <Link href="#"><p className="text-2xl font-bold">Business</p></Link>
                <Link href="#">Contact Us</Link>
            </TopNavbar>
            {children}
            <Footer />
        </div>
    )
}
