import React from 'react'
import facebook from '../public/facebook.svg'
import insta from '../public/insta.svg'
import Image from 'next/image'
import { Button } from './ui/button'
export default function Footer() {
  return (
    <div className='md:px-48 px-7 py-10 md:py-24 bg-[#101828] flex flex-col md:flex-row md:justify-between items-center'>
      <section className='md:w-3/12 w-full items-center flex md:flex-col justify-between md:h-48'>
      <p className='text-white font-bold'>REALITYDUB</p>
      <section className='flex gap-3'>
      <Image src={insta} alt=''/>
      <Image src={facebook} alt=''/>
      </section>
      </section>
      <section className='md:w-3/12 items-center w-full text-white flex flex-row justify-between h-32'>
       <section className='flex flex-col justify-between'>
        <p>Pages</p>
        <section>
            <ol>Feature</ol>
            <ol>Demo</ol>
            <ol>FAQ</ol>
        </section>
       </section>
       <section className='flex  flex-col justify-between'>
        <p>About</p>
        <section>
            <ol>About us</ol>
            <ol>Connect</ol>
            <ol>Partners</ol>
        </section>
       </section>
      </section>
      <section className='md:w-3/12 w-full flex flex-col justify-between gap-3 items-center md:h-32'>
     <Button variant='secondary' className='rounded-full w-fit'>Get in touch</Button>
      <section className=' text-white/50'>
      © 2024— RealityDub
All Rights Reserved
      </section>
      </section>
    </div>
  )
}
