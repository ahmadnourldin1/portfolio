import React from 'react'
import SVG from '../../../SVG'
import DownArrowIcon from '@/components/icons/DownArrowIcon'
import { LanguagesEnums } from '@/types/enums/languages-enum'
import Modal from './Modal'

const LanguageSwitch = () => {
  const [lang, setLang] = React.useState<LanguagesEnums>(LanguagesEnums.AR)
  const [active, setActive] = React.useState(false)
  return (
    <div className='flex items-center gap-2 cursor-pointer relative' onClick={() => setActive(!active)}>
      <span className='text-white uppercase select-none'>{lang}</span>
      <SVG icon={<DownArrowIcon className='w-full h-full [&>*]:stroke-white' />} className={`w-3 h-3 transition-all ${active ? 'rotate-180' : ''}`} />
      {active && (<Modal setLang={setLang} />)}
    </div>
  )
}

export default LanguageSwitch