import React from 'react'
import { Button } from '../ui/button'
export default function Hero() {
  return (
    <div className='flex flex-col gap-10 mt-32 w-6/12 mx-auto items-center text-center'>
      <p>AI-powered dubbing that speaks to everyone</p>
      <p className='text-6xl font-semibold'>MAKE YOUR CONTENT REACH THE WORLD</p>
      <section className='flex gap-5'>
        <Button variant='default'>Try it Yourself</Button>
        <Button variant='outline' className='border border-black/20'>Watch free demo</Button>
      </section>
    </div>
  )
}
