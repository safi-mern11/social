import { CircleUserRound, Heart, Icon, MessageCircle, Plus, Share2 } from 'lucide-react'
import React from 'react'

const Post = () => {
    const features = [
        {
            icon: <Heart strokeWidth={0.95} width={22} height={22} />,
            value: 50,
            clickHandler: () => { }
        },
        {
            icon: <MessageCircle strokeWidth={0.95} width={22} height={22} />,
            value: 50,
            clickHandler: () => { }
        },
        {
            icon: <Share2 strokeWidth={0.95} width={22} height={22} />,
            clickHandler: () => { }
        }
    ]
    return (
        <div className='flex gap-[10px] py-[16px] px-[24px] '>
            <div className='flex flex-col gap-[15px] items-center'>
                <div className='rounded-full max-h-[40px] relative'>
                    <img src="/images/home/avatar.jpg" className='rounded-full min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px]' alt="" />
                    <button className='rounded-full bg-[#000] dark:bg-[#fff] w-4 h-4 absolute bottom-0 right-0 flex items-center justify-center hover:bg-opacity-60 duration-300 ease-in-out transition-all'>
                        <Plus className='stroke-[#fff] dark:stroke-[#000] w-[14px] h-[14px]' />
                    </button>
                </div>
                <div className='h-[calc(100%_-_93px)] w-[1px] bg-black dark:bg-[#ddd]/60'></div>
            </div>
            <div className='flex flex-col gap-[8px] '>
                <div className='flex items-center gap-[5px]'>
                    <p className='font-semibold leading-[18px]'>bluehatone</p>
                    <p className='text-[#999999] leading-[18px]'>2h</p>
                </div>
                <p className='break-words max-w-[580px]'>
                    59 minutes ago
                    Voglio vivere così, senza la pesantezza del pensiero altrui. Senza paranoie su chi può o non può giudicarmi, del perché possano giudicarmi. Voglio amare, sbagliare, ridere e vivere ogni attimo che posso.
                    Voglio imparare ad apprezzare la solitudine e la mia stessa compagnia.
                    Voglio essere soprattutto felice. ❤️
                </p>
                <img src="/images/home/post-image.jpg" className='rounded-[15px]' alt="" />
                <div className='flex items-center gap-[20px] mt-[5px]'>
                    {features.map((item, index) => (
                        <div key={index + "features"} className='flex items-center gap-[3px]'>
                            <button>{item.icon}</ button>
                            {item.value && item.value}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Post