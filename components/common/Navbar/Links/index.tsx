import { linksMap } from '@/types/mapping/navbar-links-map'
import React from 'react'

const Links = () => {
  return (
    <ul className='flex gap-5 items-center justify-center'>
      {Object.values(linksMap).map((item) => (
        <li key={item.link} className='lowercase'>
          <a href={item.link}>
              <span className="text-primary">#</span>
              {item.name}
            </a>
        </li>
      ))}
    </ul>
  )
}

export default Links