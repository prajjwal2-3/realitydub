import React from 'react'
import facebook from '../public/facebook.svg'
import insta from '../public/insta.svg'
import Image from 'next/image'
import { Button } from './ui/button'
export default function Footer() {
  return (
    <div className='px-48 py-24 bg-[#101828] flex justify-between items-center'>
      <section className='w-3/12 flex flex-col justify-between h-48'>
      <p className='text-white font-bold'>REALITYDUB</p>
      <section className='flex gap-3'>
      <Image src={insta} alt=''/>
      <Image src={facebook} alt=''/>
      </section>
      </section>
      <section className='w-3/12 text-white flex flex-row justify-between h-32'>
       <section className='flex flex-col justify-between'>
        <p>Pages</p>
        <section>
            <ol>Feature</ol>
            <ol>Demo</ol>
            <ol>FAQ</ol>
        </section>
       </section>
       <section className='flex flex-col justify-between'>
        <p>About</p>
        <section>
            <ol>About us</ol>
            <ol>Connect</ol>
            <ol>Partners</ol>
        </section>
       </section>
      </section>
      <section className='w-3/12 flex flex-col justify-between items-center h-32'>
     <Button variant='secondary' className='rounded-full w-fit'>Get in touch</Button>
      <section className='flex gap-3 text-white/50'>
      © 2024— RealityDub
All Rights Reserved
      </section>
      </section>
    </div>
  )
}
