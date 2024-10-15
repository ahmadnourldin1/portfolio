import React from 'react'

const OneCubes = ({ className }: { className?: string }) => {
    return (
        <svg className={className} width="43" height="91" viewBox="0 0 43 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className={className} width="43" height="1" fill="#ABB2BF" />
            <rect className={className} y="90" width="43" height="1" fill="#ABB2BF" />
            <rect className={className} y="91" width="91" height="1" transform="rotate(-90 0 91)" fill="#ABB2BF" />
        </svg>

    )
}

export default OneCubes