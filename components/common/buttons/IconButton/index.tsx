import React from 'react'

interface props {
    label?: string
    icon?: React.ReactNode
}


const IconButton: React.FC<props> = ({ label, icon }) => {
    return (
        <button className='bg-background text-grey hover:text-white transition-all px-3 py-1 flex items-center gap-2 border-[1px] border-grey hover:border-primary'>
            <span>
                {label}
            </span>
            {icon}
        </button>
    )
}

export default IconButton