import Link from 'next/link';
import React from 'react'

const MenuItems = () => {
    const menuLinks = [
        {
            id: 1,
            title: 'Home',
            path: '/'
        },
        {
            id: 2,
            title: 'Our Sponsors',
            path: '/sponsors'
        },
        {
            id: 3,
            title: 'Resources',
            path: '/resources'
        },
        {
            id: 4,
            title: 'Upcoming Events',
            path: '/Events'
        },
        {
            id: 5,
            title: 'Agenda',
            path: '/Agenda'
        }
    ];

  return (
    <nav>
        <ul className='flex flex-col gap-3 md:flex md:flex-col lg:flex lg:flex-row lg:gap-[1.3rem] mt-2'>
            {menuLinks.map(({title, path, id}) => (
                <li key={id} className='text-dark-03 md:text-white-01 text-body-1 hover:text-primary-04'>
                    <Link href={path}>
                        {title}
                    </Link>
                </li>
                
            ))}
        </ul>
    </nav>
  )
}

export default MenuItems;