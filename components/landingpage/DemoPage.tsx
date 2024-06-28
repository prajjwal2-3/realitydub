import React from 'react'
import content from '../../public/Content.svg'
import message from '../../public/messageicon.svg'
import Image from 'next/image'
export default function DemoPage() {
  return (
    <div className='py-24 px-48 gap-12 flex flex-col  justify-center items-center'>
      <section className='text-center flex flex-col items-center justify-center gap-5'>
      <p className='text-4xl w-6/12 font-semibold'>Upload and make your content accessible to the world</p>
      <p className='text-xl w-8/12'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      </section>
<Image src={content} alt=''/>
<section className='flex justify-between w-11/12'>
    <section className='flex flex-col justify-center items-center text-center w-3/12'>
        <Image src={message} alt=''/>
        <p className='text-lg font-semibold'>Multi Language support</p>
        <p className='text-xs font-medium'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
    </section>
    <section className='flex flex-col justify-center items-center text-center w-3/12'>
        <Image src={message} alt=''/>
        <p className='text-lg font-semibold'>Option for Transcription</p>
        <p className='text-xs font-medium'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
    </section>
    <section className='flex flex-col justify-center items-center text-center w-3/12'>
        <Image src={message} alt=''/>
        <p className='text-lg font-semibold'>Fast Processing</p>
        <p className='text-xs font-medium'>Measure what matters with Untitleds easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
    </section>
</section>
    </div>
  )
}
