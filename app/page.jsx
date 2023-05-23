import Image from 'next/image'
import React from 'react'
import Speaker from './Assets/speaker1.jpg'
import BrandLogoCard from './Components/BrandLogoCard'
import { DefaultButton } from './Components/Button'
import { brandLogos } from './Components/data'


const HomePage = () => {
  return (
    <div>
      <section id='hero' className='bg-black bg-hero-bg h-screen bg-cover bg-center z-20'>
        <div className='w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 text-neutral-02'>
          <div className='mt-5'>
          <h1 className='text-headline-2 md:text-headline text-center px-4 md:px-10 lg:px-20'>Welcome to the Biggest Transistion <span className='text-primary'>Conference</span> in Africa</h1>
          <p className='text-body-1 text-center text-neutral-03 mt-5'>Accelerate your success in tech and become one of the best</p>
          

          <div className='flex mt-9 justify-center items-center'>
            <DefaultButton className='w-[360px] bg-primary hover:bg-primary-08'>
              <p className='px-[35px]'>Register</p> 
            </DefaultButton>
          </div>

        
    </div>
        </div>
      </section>

      <section id='about' className=' py-4 md:py-20 px-4 md:px-10 lg:px-20'>
        <div className='flex justify-center items-center'>
        <p className='text-title-1 text-center border-b-2 border-b-red-700'>The Transition</p>
        </div>
        <div className='bg-white-01 flex justify-between flex-col md:flex-row p-[40px] rounded-md'>
        <div className='bg-primary p-10'>
          <p className='text-center text-white-01 text-headline-2 md:text-headline-1 md:text-left md:mt-[50px]'>About <br/>The Transition</p>
        </div>
        <div className='md:w-[50%]'>
          <p className='text-center mt-[25px] md:mt-0 md:text-left text-neutral-2 text-body-1'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet blanditiis, quas, facere beatae iusto ullam, assumenda delectus minima vel inventore quis eius possimus hic natus eum distinctio minus ipsum fugit maiores placeat quasi dolorum nulla nobis ea? Laboriosam quod, at quidem repellat delectus dolorum excepturi animi nulla perspiciatis error? Aliquid at labore ducimus consequatur, delectus cumque animi nobis nemo? Ipsa et assumenda facere enim provident, id voluptatem tempore exercitationem temporibus sequi architecto dolorum quis quibusdam? Laudantium natus dolorem distinctio ab minus perferendis, optio autem quam blanditiis cupiditate obcaecati totam incidunt nemo temporibus eligendi inventore tempore. Placeat ratione blanditiis pariatur aliquid!
          </p>
        </div>
        </div>
      </section>
        
      <section id='sponsor' className='py-2 md:py-5 px-4 md:px-10 lg:px-20'>
        <div className='mt-3'>
          <div className='flex justify-center items-center'>
        <p className='text-center text-title-1 border-b-2 border-b-red-700'>Our sponsors</p>
        </div>
        <div className='flex relative overflow-x-hidden'>
          <div className='flex py-12 animate-marquee whitespace-nowrap'>
              {brandLogos.map(({id, image, title}) => (
                  <BrandLogoCard 
                  key={id}
                  image={image}
                  title={title}
                />
              ))}
          </div>

          <div className='flex absolute top-0 py-12 animate-marquee2 whitespace-nowrap'>
              {brandLogos.map(({id, image, title}) => (
                  <BrandLogoCard 
                    key={id}
                    image={image}
                    title={title}
                  />
              ))}
          </div>
        </div>
    </div>
      </section >

      <section id='footer' className='py-2 md:py-3 px-4 md:px-10 lg:px-20'>
        <div className='flex justify-center items-center'>
          <p className='text-center text-title-1 border-b-2 border-b-red-700'>Meet Our Speakers</p>
        </div>
        <div className='bg-white-01 p-[30px]'>
          <div className='flex flex-col gap-5 justify-center items-center md:flex-row'>
            <div>
            <Image src={Speaker} alt='speaker'/>
            </div>
            <div clasName=''>
              <p className='bg-yellow-200 text-title-2 w-[120px] p-[5px]'>Chief Host</p>
              <p className='text-headline-1 mt-[10px]'>ALIKO DANGOTE</p>
              <p>Chief Executive Officer</p>
              <p className='text-title-2'>Dangote Group</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage