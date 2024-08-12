import { CircleUserRound } from 'lucide-react'
import React from 'react'

const Searched = () => {
    return (
        <div className="flex items-center justify-between w-full mx-auto py-[16px] max-w-[650px]  border-b border-[#000] dark:border-[#ddd]/60">
            <div className="flex gap-[10px] items-center w-fit">
                <CircleUserRound className="w-[36px] h-[36px]" strokeWidth={0.95} />
                <div>
                    <p className='font-semibold leading-[18px]'>msafiullah_k</p>
                    <p>0 followers</p>
                </div>
            </div>
            <button className="py-[5px] px-[18px] border rounded-[6px] font-medium border-[#000] dark:border-[#ddd]/60">Follow</button>
        </div>
    )
}

export default Searched