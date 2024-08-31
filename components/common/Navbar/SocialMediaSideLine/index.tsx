import React from 'react'
import IconGroup from '../../IconGroup'

const SocialMediaSideLine = () => {
    return (
        <div className="md:flex flex-col justify-center items-center gap-2 absolute left-6 top-0 rounded-md">
            <div className="md:block hidden w-[2px] h-52 bg-grey" />
            <IconGroup className='w-full pr-5 md:pr-0 justify-around md:gap-2 flex md:flex-col flex-row md:relative fixed md:bottom-0 bottom-16 md:left-auto left-5 md:justify-center items-center'/>
        </div>
    )
}

export default SocialMediaSideLine