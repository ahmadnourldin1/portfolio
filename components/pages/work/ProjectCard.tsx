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
        <div className="w-[330px] flex items-center flex-col border-grey border-[1px]">
            <div className="relative w-full h-48">  {/* Fixed height container */}
                <Image 
                    src={image} 
                    alt="project image" 
                    fill 
                    style={{ objectFit: 'cover' }}  // covers area without distortion
                    priority // optional, if you want to prioritize loading
                />
            </div>
            <div className="w-full flex gap-3 px-2 py-2 border-b-[1px] flex-wrap">
                {techStack.map((tech, index) => (
                    <span key={index} className="text-grey text-sm">{tech}</span>
                ))}
            </div>
            <div className="w-full p-4 flex flex-col gap-3">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-grey">{description}</p>
                <div className="w-full flex items-center gap-1">
                    {isLive !== "False" ? (
                        <Link href={isLive} target="_blank" rel="noopener noreferrer">
                            <IconButton label={'Live <~>'} />
                        </Link>
                    ) : (
                        <div className="bg-gray-200 text-gray-500 px-4 py-2 rounded cursor-not-allowed text-sm">
                            Not Hosted
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
