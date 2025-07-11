"use client"
import { linksMap } from '@/types/mapping/navbar-links-map';
import cn from '@/utils/cn';
import { usePathname } from 'next/navigation'
import LanguageSwitch from './LanguageSwitch';
import { useBreakpoint } from '@/components/hooks/use-breakpoint';

interface props{
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>
  isNavbarOpen: boolean
}

const Links: React.FC<props> = ({ setIsNavbarOpen, isNavbarOpen }) => {
  const pathname = usePathname();
  const {isMobile} = useBreakpoint();

  // console.log(pathname);

  return (
    <ul className={cn('md:flex-row md:top-1 md:relative md:w-auto md:h-auto md:items-center md:justify-center w-full flex flex-col fixed left-0 top-16 h-full bg-background gap-5 justify-start items-start pt-16 md:pt-0 pl-5 md:pl-0', { 'hidden': !isNavbarOpen && isMobile })}>
      {Object.values(linksMap).map((item) => {
        const { name, link } = item;

        return (
          <li
            key={link}
            className={cn('lowercase text-grey hover:text-white transition-all md:text-base text-2xl', { 'text-white': pathname === link })}
          >
            <a href={link}>
              <span className="text-primary">#</span>
              {name}
            </a>
          </li>
        );
      })}
      {/* <LanguageSwitch  /> */}
    </ul>

  );
}

export default Links;
