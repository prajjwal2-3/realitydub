import React from 'react'

export default function Howitworks() {
  return (
    <div className='md:py-24 py-10 px-7 md:px-48 gap-12 flex flex-col  justify-center items-center'>
      <section className='text-center flex flex-col items-center justify-center gap-5'>
      <p className='text-4xl w-6/12 font-semibold'>How it works</p>
      <p className='text-xl md:w-8/12'>This workflow provides a streamlined and user-friendly experience for converting videos into different languages using AI dubbing technology.</p>
      </section>
      <section className='flex flex-col md:flex-row gap-5 md:gap-5 justify-evenly'>
        <div className="rounded-3xl md:w-3/12 p-7 bg-[#EBF4FC] gap-5 flex flex-col">
            <p className='text-[#2879C2] font-semibold'>Step 1</p>
            <p className='text-xl font-semibold'>Upload the video</p>
            <p className='text-sm'>Users start by uploading their video in one of the supported file formats. This is the initial step where the raw content is introduced to the tool for processing.</p>
        </div>
        <div className="rounded-3xl md:w-3/12 p-7 bg-[#EBF4FC] gap-5 flex flex-col">
            <p className='text-[#2879C2] font-semibold'>Step 2</p>
            <p className='text-xl font-semibold'>Language Selection</p>
            <p className='text-sm'>In this step, users specify the original language of the video and then select the language into which they want the video dubbed</p>
        </div>
        <div className="rounded-3xl md:w-3/12 p-7 bg-[#EBF4FC] gap-5 flex flex-col">
            <p className='text-[#2879C2] font-semibold'>Step 3</p>
            <p className='text-xl font-semibold'>Preview / Download</p>
            <p className='text-sm'>Finally, users can preview the dubbed video to ensure the synchronization and accuracy of the dubbing & Download the AI Dubbed video</p>
        </div>
      </section>
    </div>
  )
}
