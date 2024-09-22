import SVG from '@/components/common/SVG'
import DiscordIcon from '@/components/icons/DiscordIcon'
import EmailIcon from '@/components/icons/EmailIcon'
import React from 'react'

const Contact = () => {
  return (
    <div className="w-full flex justify-center flex-col mt-5">
      <div className="w-full flex justify-center flex-col gap-5 mb-16">
        <h1 className="text-3xl"><span className="text-primary">/</span>contacts</h1>
        <p className="text-grey">Who am i?</p>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col">
        <p className="text-grey text-sm md:text-base w-1/2">
          I&apos;m interested in freelance opportunities. However, if you have other request or question, don&apos;t hesitate to contact me
        </p>
        <div className="flex justify-center items-center flex-row gap-5 w-1/2">
          <div className="flex justify-center flex-col gap-2 border-2 border-grey p-3">
            <p className="text-white">Support me here</p>
            <a href="mailto:0qz6a@example.com" className="text-grey">0qz6a@example.com</a>
          </div>
          <div className="flex justify-center flex-col gap-2 border-2 border-grey p-3">
            <p className="text-white">Message me here</p>
            <div className="flex justify-start items-center flex-row gap-2">
              <SVG icon={<DiscordIcon />} className="w-5 h-5" />
              <p className="text-grey">Elias#1234</p>
            </div>
            <div className="flex justify-start items-center flex-row gap-2">
              <SVG icon={<EmailIcon />} className="w-5 h-5" />
              <p className="text-grey">elias@elias-dev.ml</p>
            </div>
          </div>
        </div>
      </div>
        {/* <h1 className="text-3xl mt-6"><span className="text-primary">#</span>contacts</h1> */}
    </div>
  )
}

export default Contact