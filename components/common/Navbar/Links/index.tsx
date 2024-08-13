"use client"
import { NavbarLinksEnums } from '@/types/enums/navbar-links-enum';
import { linksMap } from '@/types/mapping/navbar-links-map';
import cn from '@/utils/cn';
import { useState } from 'react';

const Links = () => {
  const [activeLink, setActiveLink] = useState<NavbarLinksEnums>(NavbarLinksEnums.HOME);

  return (
    <ul className='flex gap-5 items-center justify-center'>
      {Object.keys(linksMap).map((key) => {
        const linkEnumValue = key as NavbarLinksEnums;
        const { name, link } = linksMap[linkEnumValue];

        return (
          <li 
            key={link} 
            className={cn('lowercase', { 'text-primary': activeLink === linkEnumValue })}
            onClick={() => setActiveLink(linkEnumValue)}
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
