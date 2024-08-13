import React from 'react'
import IconGroup from '../../IconGroup'

const SocialMediaSideLine = () => {
    return (
        <div className="hidden md:flex flex-col justify-center items-center gap-2 absolute left-6 top-0 rounded-md">
            <div className="w-[2px] h-52 bg-grey" />
            <IconGroup className='flex flex-col gap-2 justify-center items-center'/>
        </div>
    )
}

export default SocialMediaSideLine