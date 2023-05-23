import Link from 'next/link'
import React from 'react'
import {DefaultButton} from '../Components/Button'

const MenuAction = () => {
  return (
    <div className='flex justify-center mt-6 lg:mt-2'>
        <Link href='/' rel="noreferrer" target="_blank">
            <DefaultButton className='bg-primary hover:bg-primary-08 rounded-2xl'>
                <p className='text-button-1 text-white-01 text-center font-bold px-[25px]'>Register</p>    
            </DefaultButton>      
        </Link>
    </div>
  )
}

export default MenuAction