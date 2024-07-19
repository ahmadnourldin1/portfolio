import React from 'react'

const Home = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen px-4 -mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-screen-xl mx-auto">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">
            Hi, I&apos;m <br /> Ahmad Nourldin
          </h1>
          <p className="text-lg">
            A Sydney based front-end developer passionate about building
            accessible and user-friendly websites.
          </p>
        </div>
        <div className="w-full md:w-1/2 text-center">
          {/* Placeholder content */}
          <p className="text-xl">Your Content Here</p>
        </div>
      </div>
    </div>
  )
}

export default Home
