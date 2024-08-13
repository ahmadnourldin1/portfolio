"use client"
import { NavbarLinksEnums } from '@/types/enums/navbar-links-enum';
import { linksMap } from '@/types/mapping/navbar-links-map';
import cn from '@/utils/cn';
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import LanguageSwitch from './LanguageSwitch';

const Links = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <ul className='flex gap-5 items-center justify-center'>
      {Object.values(linksMap).map((item) => {
        const { name, link } = item;

        return (
          <li 
            key={link} 
            className={cn('lowercase text-grey hover:text-white transition-all', { 'text-white': pathname === link })}
          >
            <a href={link}>
              <span className="text-primary">#</span>
              {name}
            </a>
          </li>
        );
      })}
      <LanguageSwitch />
    </ul>
  );
}

export default Links;
