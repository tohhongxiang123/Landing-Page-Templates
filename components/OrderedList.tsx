import Title from "./Title";

interface ListItem {
    title: string,
    description: string
}

interface ListSectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    listItems: ListItem[],
    reverse?: boolean
}

export default function ListSection({ listItems = [], ...props }: ListSectionProps) {
    return (
        <div {...props} className={`flex flex-col -mx-8 items-center ${props.className}`}>
            <div className={`max-w-xl mx-auto px-8`}>
                <ul className={`space-y-12`}>
                    {listItems.map((item, index) => (
                        <li className={`flex -mx-4`} key={item.title}>
                            <div className={`px-4`}>
                                <span
                                    className={`flex w-16 h-16 mx-auto items-center
                            justify-center text-2xl font-bold rounded-full
                            bg-blue-50 text-blue-500`}
                                >
                                    {index + 1}
                                </span>
                            </div>
                            <div className={`px-4`}>
                                {item.title && <h3 className={`my-4 text-xl font-semibold`}>{item.title}</h3>}
                                {item.description && <p className={`text-gray-500 leading-loose`}>{item.description}</p>}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}