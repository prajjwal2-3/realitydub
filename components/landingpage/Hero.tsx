import React from 'react'
import { Button } from '../ui/button'
export default function Hero() {
  return (
    <div className='flex flex-col gap-10 mt-10  md:mt-32 lg:w-6/12 mx-auto items-center text-center'>
     <section className='flex flex-col-reverse md:flex-col'>
     <p>AI-powered dubbing that speaks to everyone</p>
     <p className='text-4xl sm:text-6xl 3xl:text-7xl font-semibold'>MAKE YOUR CONTENT REACH THE WORLD</p>
     </section>
      <section className='flex gap-5'>
        <Button variant='default'>Try it Yourself</Button>
        <Button variant='outline' className='border border-black/20'>Watch free demo</Button>
      </section>
    </div>
  )
}
