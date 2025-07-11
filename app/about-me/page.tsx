import SkillItem from '@/components/pages/aboutMe/SkillItem'
import React from 'react'

const AboutMe = () => {
  return (
    <div className="w-full flex justify-center flex-col mt-5">
      <div className="w-full flex justify-center flex-col gap-5 md:mb-16 mb-9">
        <h1 className="text-3xl"><span className="text-primary">/</span>about-me</h1>
        <p className="text-grey">Who am i?</p>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 w-full flex flex-col md:gap-5 gap-2">
          <p className="text-grey text-sm md:text-base">Hello, i&apos;m Ahmad!</p>
          <p className="text-grey text-sm md:text-base">I&apos;m a self-taught front-end developer based in Lebanon. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
          <p className="text-grey text-sm md:text-base">Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
        </div>
        <div className="w-1/2">
          {/* Image here */}
        </div>
      </div>
      <div className="w-full flex justify-center flex-col gap-5 md:mb-16 mb-9 mt-20">
        <h1 className="text-3xl"><span className="text-primary">#</span>skills</h1>
      </div>
      <div className="w-full flex items-start flex-wrap gap-5">
        <SkillItem title="Languages" items={['Python', 'JavaScript', 'Dart', 'Java']} />
        <SkillItem title="Other" items={['HTML', 'CSS', 'MySQL', 'REST', 'WebSockets']} />
        <SkillItem title="Tools" items={['VSCode', 'Git', 'GitHub', 'Windows']} />
        <SkillItem title="Databases" items={['SQLite', 'PostgreSQL']} />
        <SkillItem title="Frameworks" items={['React', 'Next.js', 'NestJS']} />
      </div>

      <p className="mt-8 text-xs text-grey max-w-2xl mx-auto text-center">
        Design credit: Elias Devis — <a href="https://github.com/EliasDevis/EliasDevis.github.io" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      {/* https://www.figma.com/community/file/1164933568884615740/portfolio */}


      {/* <div className="h-96"></div> */}
    </div>
  )
}

export default AboutMe
