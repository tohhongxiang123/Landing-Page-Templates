interface FooterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {

}

export default function Footer({ ...props }: FooterProps) {
    return (
        <footer {...props} className={`px-8 py-4 ${props.className}`}>
            <ul>
                <li>+65 1234 5678</li>
                <li>email@email.email</li>
            </ul>
        </footer>
    )
}
