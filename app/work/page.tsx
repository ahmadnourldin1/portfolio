import ProjectCard from '@/components/pages/work/ProjectCard'
import React from 'react'
import Image1 from '@/public/Rectangle 22.png'
import Image2 from '@/public/Rectangle 22(1).png'
import Image3 from '@/public/Rectangle 22(2).png'
import Image4 from '@/public/Rectangle 22(3).png'
import Image5 from '@/public/Rectangle 22(4).png'

const Work = () => {
  return (
    <div className="w-full flex justify-center flex-col mt-5">
      <div className="w-full flex justify-center flex-col gap-5 mb-16">
        <h1 className="text-3xl"><span className="text-primary">/</span>projects</h1>
        <p className="text-grey">List of my projects</p>
      </div>
      <h1 className="text-3xl"><span className="text-primary">#</span>complete-apps</h1>
      <div className="w-full flex justify-center flex-wrap gap-5 mt-5">
        <ProjectCard image={Image1} techStack={['HTML', 'SCSS', 'Python', 'Flask']} title={'ChertNodes'} description={'Minecraft servers hosting '} isLive={'google.com'} />
      </div>
      <div className="h-80"></div>
    </div>
  )
}

export default Work