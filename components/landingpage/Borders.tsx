'use client'
import React from 'react'
import tick from '../../public/tick.svg'
import Image from 'next/image'
import image from '../../public/Image.svg'
import flag1 from '../../public/flag1.svg'
import flag2 from '../../public/flag2.svg'
import flag3 from '../../public/flag3.svg'
import flag4 from '../../public/flag4.svg'
import flag5 from '../../public/flag5.svg'
import flag6 from '../../public/flag6.svg'
import flag7 from '../../public/flag7.svg'
import flag8 from '../../public/flag8.svg'
import flag9 from '../../public/flag9.svg'
import flag10 from '../../public/flag10.svg'
import flag11 from '../../public/flag11.svg'
import flag12 from '../../public/flag12.svg'
import flag13 from '../../public/flag13.svg'
import flag14 from '../../public/flag14.svg'
import flag15 from '../../public/flag15.svg'
import success from '../../public/success.svg'
export default function Borders() {
    const flag = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const images = [
        flag1, flag2, flag3, flag4, flag5, flag6, flag7, 
        flag8, flag9, flag10, flag11, flag12, flag13, flag14, flag15
    ]
    const arr = [1,2,3,4]

    return (
        <div className='bg-[#EBF4FC] py-24 px-48 gap-12 flex flex-col  justify-center items-center'>
            <section className='text-4xl font-semibold'>Go beyond borders</section>
            <section className='flex justify-between 3xl:w-10/12'>
                <section className='w-6/12 flex gap-5 flex-col'>
                    <p>FEATURE</p>
                    <p className='text-3xl font-semibold'>Make your content available in many languages</p>
                    <p className='font-medium '>Our AI-powered dubbing tool allows for seamless conversion of your videos into numerous languages, ensuring broad accessibility and viewer engagement across the globe.</p>
                    <section className='grid grid-cols-2'>
                        {arr.map((e, index) => (
                            <section key={index} className='flex m-4'>
                                <Image src={tick} alt='' />
                                <p>28 Languages</p>
                            </section>
                        ))}
                    </section>
                </section>
                <section className='w-5/12'>
                    <div className="rounded-3xl border-8 w-full h-full bg-white p-5 flex flex-wrap border-[#E4EFF8]">
                        
                            <Image  src={image} alt='' className='w-full h-full object-cover' />
                        
                    </div>
                </section>
            </section>
            <section className='flex justify-between 3xl:w-10/12'>
                <section className='w-6/12 flex gap-5 flex-col'>
                    <p>FEATURE</p>
                    <p className='text-3xl font-semibold'>Speed up your rollout with our rapid processing capabilities</p>
                    <p className='font-medium '>By minimizing delays, your videos are ready to capture interest and engage viewers anywhere in the world almost as soon as you are ready to publish them.</p>
                    <section className='grid grid-cols-2'>
                        {arr.map((e, index) => (
                            <section key={index} className='flex m-4'>
                                <Image src={tick} alt='' />
                                <p>28 Languages</p>
                            </section>
                        ))}
                    </section>
                </section>
                <section className='w-5/12'>
                    <div className="rounded-3xl border-8 w-full h-full bg-white p-5 flex flex-wrap border-[#E4EFF8]">
                        
                            <Image src={success}  alt='' className='w-full h-full object-cover' />
                        
                    </div>
                </section>
            </section>
        </div>
    )
}
