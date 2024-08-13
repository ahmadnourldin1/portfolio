"use client"
import { NavbarLinksEnums } from '@/types/enums/navbar-links-enum';
import { linksMap } from '@/types/mapping/navbar-links-map';
import cn from '@/utils/cn';
import { useState } from 'react';
import { usePathname } from 'next/navigation'

const Links = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <ul className='flex gap-5 items-center justify-center'>
      {Object.keys(linksMap).map((key) => {
        const linkEnumValue = key as NavbarLinksEnums;
        const { name, link } = linksMap[linkEnumValue];

        return (
          <li 
            key={link} 
            className={cn('lowercase', { 'text-primary': pathname === link })}
          >
            <a href={link}>
              <span className="text-primary">#</span>
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;
