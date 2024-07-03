import React from 'react'
import { Button } from './ui/button'
import { Ghost } from 'lucide-react'
export default function Header() {
  return (
    <div className='w-full h-20 flex justify-between border-b items-center px-2  md:px-20'>
      <section>
        REALITYDUB
      </section>
      <section className='hidden md:flex gap-10'>
      <Button variant="ghost">Features</Button>
      <Button variant="ghost">Demo</Button>
      <Button variant="ghost">FAQ</Button>
      <Button variant="ghost">About Us</Button>
      </section>
      <section>
        <Button>Sign up</Button>
      </section>
    </div>
  )
}
