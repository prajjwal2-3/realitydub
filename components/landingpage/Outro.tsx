import React from 'react'
import { Button } from '../ui/button'

export default function Outro() {
  return (
    <div className='md:py-24 py-10 bg-[#EBF4FC] md:px-48 px-7 flex flex-col gap-12 justify-center items-center'>
      <section className='text-center flex flex-col items-center justify-center gap-5'>
      <p className='text-4xl md:w-7/12 font-semibold'>Start dubbing your content now.</p>
      <p className='text-xl md:w-8/12'>Get access to the most efficient ai dubbing tool and start reaching to every corner of the world with your content</p>
      </section>
      <section className='flex gap-7'>
        <Button variant='default' className='w-40 md:w-48'>Try it Yourself</Button>
        <Button variant='outline' className='w-40 md:w-48 bg-transparent border border-black/20'>Sign Up</Button>
      </section>
    </div>
  )
}
