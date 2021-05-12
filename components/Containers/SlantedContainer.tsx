import React from 'react'
import BaseContainer from './BaseContainer'

interface WaveContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    topGradient?: 'positive' | 'negative' | 'zero',
    bottomGradient?: 'positive' | 'negative' | 'zero'
}

export default function WaveContainer({ children, topGradient = 'zero', bottomGradient = 'zero', ...props }: WaveContainerProps) {
    const topClipPath = topGradient == 'positive' ? '0 20%, 100% 0' : topGradient == 'negative' ? '0 0, 100% 20%' : '0 0, 100% 0'
    const bottomClipPath = bottomGradient == 'positive' ? '100% 80%, 0 100%' : bottomGradient == 'negative' ? '100% 100%, 0 80%' : '100% 100%, 0 100%'

    const clipPath = `polygon(${topClipPath}, ${bottomClipPath})`
    return (
        <BaseContainer {...props as any} className={`py-48 ${props.className}`} style={{ clipPath: clipPath }}>
            <div>
                {children}
            </div>
        </BaseContainer>
    )
}
