import React from 'react'
import Image from 'next/image'

const BrandLogoCard = ({image, title}) => {
  return (
    <div className='bg-white-01 mx-4 p-5 rounded-xl border border-neutral-04 min-w-[280px]'>
        <div className='mr-4 flex justify-center items-center rounded-full'>
        <Image src={image} alt={title}/>
        </div>
    </div>
  )
}

export default BrandLogoCard