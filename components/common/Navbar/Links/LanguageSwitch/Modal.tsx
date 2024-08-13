import { LanguagesEnums } from '@/types/enums/languages-enum';
import { languagesMap } from '@/types/mapping/languages-map';
import React from 'react'

interface props {
  setLang: React.Dispatch<React.SetStateAction<LanguagesEnums>>
}

const Modal: React.FC<props> = ({setLang}) => {
  return (
    <ul className='flex flex-col absolute top-7 left-0 border-white border-[2px] px-1 !bg-background'>
      {
        Object.values(languagesMap).map((item) => {
          const { name } = item;
          return (
            <li key={name} className='uppercase' onClick={() => setLang(name as LanguagesEnums)}>
              {name}
            </li>
          )
        })
      }
    </ul>
  )
}

export default Modal