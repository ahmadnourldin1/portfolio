import React from 'react'

interface props {
    title: string
    items: string[]
}

const SkillItem: React.FC<props> = ({ title, items }) => {
    return (
        <div className="w-[201px] flex justify-center items-center flex-col border-grey border-[1px]">
            <h1 className="w-full flex items-center border-b-[1px] h-10 pl-2">{title}</h1>
            <div className="w-full flex flex-wrap gap-3 pl-2 py-2">
                {items.map((item, index) => (
                    <span key={index} className="text-grey">{item}</span>
                ))}
            </div>
        </div>
    )
}

export default SkillItem