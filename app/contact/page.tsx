import SVG from '@/components/common/SVG'
import WhatsappIcon from '@/components/icons/WhatsappIcon'
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
          I&apos;m actively looking to work with a company or be part of a team where I can grow and contribute. If you have any opportunities or questions, feel free to reach out.
        </p>
        <div className="flex justify-center items-center flex-row gap-5 w-1/2">

          <div className="flex justify-center flex-col gap-2 border-2 border-grey p-3">
            <p className="text-white">Message me here</p>
            <div className="flex justify-start items-center flex-row gap-2">
              <SVG icon={<WhatsappIcon />} className="w-5 h-5" />
              <a
                href="https://wa.me/96181053032" // replace with your actual phone number
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey hover:underline"
              >
                +961 81 053 032
              </a>
            </div>
            <div className="flex justify-start items-center flex-row gap-2">
              <SVG icon={<EmailIcon />} className="w-5 h-5" />
              <p className="text-grey">ahmadnourldinprs@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* <h1 className="text-3xl mt-6"><span className="text-primary">#</span>contacts</h1> */}
    </div>
  )
}

export default Contact