"use client"
import React from 'react'
import Input from "../../components/common/Input"
import Link from 'next/link'
import { useTheme } from 'next-themes'

const Page = () => {
    const { setTheme, theme } = useTheme();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(theme, "email")
        setTheme(theme == "dark" ? "light" : "dark")
    }
    return (
        <form onSubmit={(e) => { handleSubmit(e) }} className='absolute inset-0 m-auto max-w-[400px] w-full max-h-fit flex flex-col items-center'>
            <img src={"/images/auth/logo.svg"} className="max-w-[50px]" alt="" />
            <h1 className='text-[40px] font-semibold mt-[20px]'>Login</h1>
            <div className='w-full pt-[20px]'>
                <Input label="email / username" name="email" required />
            </div>
            <div className='w-full pt-[25px]'>
                <Input label="password" name="password" required />
            </div>
            <button type='submit' className='min-h-[50px] max-h-[50px] text-[18px] hover:font-bold hover:scale-[1.05] duration-300 transition-all ease-in-out font-medium rounded-[10px] mt-[40px] w-full mx-auto bg-black dark:bg-white  dark:text-[#000] text-[#fff]'>
                Submit
            </button>
            <Link className='mt-[20px] hover:border-[#000] dark:hover:border-[#fff] border-transparent border-b pb-[1px]' href={"/signup"}>sign up</Link>
        </form>

    )
}

export default Page