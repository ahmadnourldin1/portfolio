import IconButton from '@/components/common/buttons/IconButton'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface props {
    image: StaticImageData
    techStack: string[]
    title: string
    description: string
    isLive: "False" | string
}

const ProjectCard: React.FC<props> = ({ image, techStack, title, description, isLive }) => {
    return (
        <div className="w-full md:w-[330px] flex justify-center items-center flex-col border-grey border-[1px]">
            <Image className="w-full object-cover" src={image} alt="project image" />
            <div className="w-full flex gap-3 px-2 py-2 border-b-[1px]">
                {techStack.map((tech, index) => (
                    <span key={index} className="text-grey">{tech}</span>
                ))}
            </div>
            <div className="w-full p-4 flex flex-col gap-3">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-grey">{description}</p>
                <div className="w-full flex items-center gap-1">
                {isLive !== "False" ? <Link href={isLive}><IconButton label={'Live <~>'} /></Link> : null}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard