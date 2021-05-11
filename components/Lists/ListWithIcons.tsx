import React from 'react'

interface ListItem {
    icon: string,
    title: string,
    description: string
}

interface ListWithIconsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    listItems: ListItem[]
}

export default function ListWithIcons({ listItems, ...props }: ListWithIconsProps) {
    return (
        <ul {...props}>
            {listItems.map(item => (
                <li className={`flex -mx-4 items-center mb-8 gap-8`} key={item.title}>
                    <div className="p-4 w-16 h-16 flex justify-center items-center rounded-full bg-gray-200">
                        <span>
                            <img src={item.icon} />
                        </span>
                    </div>
                    <div className={`px-4 max-w-xl`}>
                        {item.title && <h3 className={`text-xl font-semibold`}>{item.title}</h3>}
                        {item.description && <p className={`text-gray-500 leading-loose`}>{item.description}</p>}
                    </div>
                </li>
            ))}
        </ul>
    )
}
