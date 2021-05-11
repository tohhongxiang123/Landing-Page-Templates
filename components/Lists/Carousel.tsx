import React, { useState } from 'react'
import Title from '../Title';

interface CarouselProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactChildren[] | React.ReactElement[],
    title?: string
}

export default function Testimonials({ title = '', children, ...props }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex(c => (c + 1) % children.length)
    };

    const previous = () => {
        setCurrentIndex(c => c - 1 < 0 ? children.length - 1 : c - 1)
    };

    return (
        <div {...props} className={`max-w-7xl mx-auto ${props.className}`}>
            <Title className="text-center tracking-tight">{title}</Title>
            <section>
                <figure>
                    <div className={`relative`}>
                        <div className='max-w-3xl mx-auto p-8 sm:p-16'>
                            {children[currentIndex]}
                        </div>
                        <div className={`cursor-pointer flex px-12 justify-end`}>
                            <button onClick={previous} className="focus:outline-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={44}
                                    height={44}
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#CBD5E0"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </button>
                            <button onClick={next} className="focus:outline-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={44}
                                    height={44}
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#CBD5E0"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </figure>
            </section>
        </div>
    );
};