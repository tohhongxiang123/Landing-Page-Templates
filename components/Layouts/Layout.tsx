import Footer from "../Footer";
import TopNavbar from "../TopNavbar";
import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div>
            <TopNavbar>
                <Link href="#"><p className="text-2xl font-bold cursor-pointer">Business</p></Link>
                <Link href="#"><p className="cursor-pointer">Contact Us</p></Link>
            </TopNavbar>
            {children}
            <Footer className="flex justify-center items-center" />
        </div>
    )
}
