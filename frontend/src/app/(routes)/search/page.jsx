import Searched from '@/app/components/search/Searched'
import React from 'react'

const Page = () => {
  return (
    <div className='mt-[20px] w-full flex items-center flex-col'>
      <input type="text" className='min-h-[45px] px-[15px] focus:shadow-md border border-[#ddd] dark:border-[#ddd]/50 outline-none rounded-[12px] max-w-[650px] w-full bg-[#fafafa] dark:bg-[#181818]' placeholder='Search' />
      <div className='mt-[20px] w-full '>
        <Searched />
        <Searched />
        <Searched />
        <Searched />
        <Searched />

      </div>
    </div>
  )
}

export default Page