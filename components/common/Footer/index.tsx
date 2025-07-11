import React from 'react'
import Logo from '../Navbar/Logo'
import GithubIcon from '@/components/icons/GithubIcon'
import SVG from '../SVG'

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center my-10 relative">
      <div className="w-screen h-[2px] bg-grey absolute left-0 top-0" />
      <div className="w-full flex justify-between mt-5 items-center max-w-6xl px-4">
        <div className="flex flex-col justify-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <Logo />
            <p className="text-sm text-grey">https://ahmadnourldin.vercel.app/</p>
          </div>
          <p className="text-grey">Full stack developer</p>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center">
          <h1 className="font-semibold">Media</h1>
          <a
            href="https://github.com/ahmadnourldin1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <SVG
              icon={<GithubIcon className="w-full h-full" />}
              className="md:w-5 md:h-5 w-10 h-10"
              key={1}
            />
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-grey max-w-6xl px-4">
        © 2025 Ahmad Nourldin
      </div>
    </footer>
  )
}

export default Footer
