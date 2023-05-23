import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/Fa"
import Logo from '../Assets/Tlogo.png'

const Footer = () => {
  return (
    <div id='footer' className='bg-neutral-08 py-2 md:py-5 px-4 md:px-10 lg:px-20'>
        <div className='flex flex-col justify-center items-center md:justify-between md:flex-row'>
            <div>
                <Link href='/' className='flex justify-center items-center md:justify-start'>
                    <Image src={Logo} alt='logo-icon' width={150} height={150} />
                </Link>
                <p className='text-body-2 text-dark-02'>&#169; 2023 The Transition, All Rights Reserved.</p>
            </div>
            <div className='flex mt-[10px] md:mt-[50px] gap-5 text-primary text-3xl'>
            <FaFacebookSquare />
            <FaInstagram />
            <FaLinkedin />
        </div>
        </div>
    </div>
  )
}

export default Footer