import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from './Dialog'
import { Plus } from 'lucide-react'

const PostAdder = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className='fixed bottom-[30px] right-[30px] w-[70px] h-[60px] flex items-center justify-center border border-[#000] dark:border-[#ddd]/50 rounded-[10px] hover:bg-[#ddd] dark:hover:bg-[#ddd]/40 duration-300 ease-in-out transition-all'>
                    <Plus className='w-[34px] h-[34px] stroke-[#000] dark:stroke-[#fff]' strokeWidth={0.95} />
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-[600px] dark:bg-[#000] dark:border-[#ddd]/60 border-[#000]">

            </DialogContent>
        </Dialog>
    )
}

export default PostAdder