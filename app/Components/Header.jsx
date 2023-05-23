'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { useState } from 'react';
import Logo from '../Assets/Tlogo.png'
import MenuItems from './MenuItems'
import MenuAction from './MenuAction'

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='relative'>
      {/* Mobile view */}
        
      <div className={`${
        open ? "-translate-x-0" : "-translate-y-full"
      } absolute top-0  w-screen bg-white p-7 transition-all duration-300 ease-in-out filter lg:hidden z-50`}
      >
        
        <div className="text-center lg:hidden" onClick={() => setOpen(!open)}>
          <div className='flex justify-between'>
            <Link href='/'>
                <Image src={Logo} alt='logo-icon' width={150} height={150}/>
            </Link>
            <div className="mt-4">
              <HiOutlineXMark
                onClick={() => setOpen(!open)}
                className="md:hidden text-4xl"
              />
            </div>
          </div>
          <MenuItems />
          <MenuAction />
        </div>
      </div>

      {/* Other screen */}
      <div className='absolute w-full flex justify-between items-center py-5 px-4 md:px-10 lg:px-20 z-40'>
          <Link href='/'>
              <Image src={Logo} alt='logo-icon' width={150} height={150}/>
          </Link>
          <HiBars3BottomRight
              onClick={() => setOpen(!open)}
              className="lg:hidden text-3xl text-white-01"
            />
          <div className='hidden lg:flex'>
              <MenuItems />
          </div>
          <div className='hidden lg:flex'>
              <MenuAction />
          </div>  
      </div>
    </div>
  )
}

export default Header