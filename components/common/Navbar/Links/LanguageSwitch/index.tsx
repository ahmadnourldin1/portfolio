import React from 'react'
import SVG from '../../../SVG'
import DownArrowIcon from '@/components/icons/DownArrowIcon'
import { LanguagesEnums } from '@/types/enums/languages-enum'
import Modal from './Modal'

const LanguageSwitch: React.FC = () => {
  
  const [lang, setLang] = React.useState<LanguagesEnums>(LanguagesEnums.AR)
  const [active, setActive] = React.useState(false)

  return (
    <div className={'flex items-center gap-2 cursor-pointer relative'} onClick={() => setActive(!active)}>
      <span className='text-white uppercase select-none md:text-base text-2xl'>{lang}</span>
      <SVG icon={<DownArrowIcon className='w-full h-full [&>*]:stroke-white' />} className={`md:w-3 w-5 md:h-3 h-5 transition-all ${active ? 'rotate-180' : ''}`} />
      {active && (<Modal setLang={setLang} />)}
    </div>
  )
}

export default LanguageSwitch