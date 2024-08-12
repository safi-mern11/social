import { CircleUserRound } from 'lucide-react'
import React from 'react'
import Post from '../home/Post'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../common/Dialog'
import Input from '../common/Input'

const Profile = ({ isUserItSelf }) => {
  return (
    <div className='mt-[20px] w-full'>
      <div className='max-w-[650px] w-full mx-auto'>
        <div className='flex justify-between w-full'>
          <div className='flex flex-col gap-[px] mt-[5px]'>
            <h1 className='text-[24px] font-semibold'>Muhammad Safiullah Khan</h1>
            <p>msafiullah_k</p>
          </div>
          <CircleUserRound className='w-[84px] h-[84px]' strokeWidth={1} />
        </div>
        <p className='text-[#999999] mt-[12px]'>0 followers</p>
        {isUserItSelf ?
          <Dialog>
            <DialogTrigger asChild>
              <button className='min-h-[40px] max-h-[40px] bg-[#000] dark:bg-[#fff] text-[#fff] dark:text-[#000] font-semibold rounded-[10px] w-full mt-[30px] hover:scale-[1.05] duration-300 ease-in-out transition-all'>Edit profile</button>
            </DialogTrigger>
            <DialogContent className="max-w-[425px] dark:bg-[#000] dark:border-[#ddd]/60 border-[#000]">
              <div className='w-fit '>
                <label>
                  profile image
                  <input className='mt-[5px]' type="file" name="avatar" required />
                </label>
              </div>
              <div className='w-full '>
                <Input label="email" name="email" required />
              </div>
              <div className='w-full '>
                <Input label="username" name="username" required />
              </div>
              <div className='w-full '>
                <Input label="password" name="password" required />
              </div>
              <button type='submit' className='min-h-[50px] max-h-[50px] text-[18px] hover:font-bold hover:scale-[1.05] duration-300 transition-all ease-in-out font-medium rounded-[10px] mt-[20px] w-full mx-auto bg-black dark:bg-white  dark:text-[#000] text-[#fff]'>
                Save changes
              </button>
            </DialogContent>
          </Dialog>
          : <button className='min-h-[40px] max-h-[40px] bg-[#000] dark:bg-[#fff] text-[#fff] dark:text-[#000] font-semibold rounded-[10px] w-full mt-[30px] hover:scale-[1.05] duration-300 ease-in-out transition-all'>Follow</button>}
        <h1 className='font-medium border-b border-[#000] dark:border-b-[#ddd]/50 pb-[10px] mt-[25px] '>Threads</h1>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  )
}

export default Profile