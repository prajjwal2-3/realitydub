import React from 'react'
import content from '../../public/Content.svg'
import message from '../../public/messageicon.svg'
import Image from 'next/image'
export default function DemoPage() {
  return (
    <div className='py-16 md:py-24 md:px-48 gap-12 flex flex-col  justify-center items-center'>
      <section className='text-center flex flex-col items-center justify-center gap-5'>
      <p className='text-4xl w-10/12 md:w-6/12 font-semibold'>Upload and make your content accessible to the world</p>
      <p className='md:text-xl w-11/12 md:w-8/12'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      </section>
<Image src={content} alt=''/>
<section className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 w-11/12'>
    <section className='flex flex-col justify-center items-center text-center w-10/12 md:w-3/12'>
        <Image src={message} alt=''/>
        <p className='text-xl sm:text-2xl md:text-lg 3xl:text-2xl font-semibold'>Multi Language support</p>
        <p className='text-xs sm:text-sm 3xl:text-base font-medium'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
    </section>
    <section className='flex flex-col justify-center items-center text-center w-10/12 md:w-3/12'>
        <Image src={message} alt=''/>
        <p className='text-xl sm:text-2xl md:text-lg 3xl:text-2xl font-semibold'>Option for Transcription</p>
        <p className='text-xs sm:text-sm 3xl:text-base font-medium'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
    </section>
    <section className='flex flex-col justify-center items-center text-center w-10/12 md:w-3/12'>
        <Image src={message} alt=''/>
        <p className='text-xl sm:text-2xl md:text-lg 3xl:text-2xl font-semibold'>Fast Processing</p>
        <p className='text-xs sm:text-sm 3xl:text-base font-medium'>Measure what matters with Untitleds easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
    </section>
</section>
    </div>
  )
}
