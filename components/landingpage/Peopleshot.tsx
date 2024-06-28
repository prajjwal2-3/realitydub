import React from 'react'
import Image from 'next/image'
import people from '../../public/people.svg'
export default function Peopleshot() {
  return (
    <div className='w-full mt-10'>
      <Image src={people} alt='' className='object-cover w-full h-full'/>
    </div>
  )
}
