import React, { useCallback, useState } from 'react'

interface WaveContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    backgroundColor?: string,
    top?: boolean,
    bottom?: boolean
}

export default function WaveContainer({ children, top = true, bottom = true, ...props }: WaveContainerProps) {
    const [color, setColor] = useState('')
    const getColor = useCallback(node => {
        if (node == null) {
            return ''
        }

        return setColor(window.getComputedStyle(node).backgroundColor)
    }, [props.className])
    return (
        <div className={`-mt-16 -mb-32`}>
            {top && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill={color} fillOpacity="1" d="M0,224L80,186.7C160,149,320,75,480,80C640,85,800,171,960,181.3C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>}
            <div {...props} ref={getColor} className={props.className}>
                {children}
            </div>
            {bottom && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill={color} fillOpacity="1" d="M0,64L40,69.3C80,75,160,85,240,106.7C320,128,400,160,480,160C560,160,640,128,720,122.7C800,117,880,139,960,160C1040,181,1120,203,1200,197.3C1280,192,1360,160,1400,144L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>}
        </div>
    )
}
