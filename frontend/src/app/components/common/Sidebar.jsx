"use client"
import { useTheme } from 'next-themes'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { House, Search, User, Menu, Moon, Sun, LogOut } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './Dropdown'
import { Switch } from './Switch'

const Sidebar = () => {
    const path = usePathname();
    const router = useRouter();
    const { setTheme, theme } = useTheme();
    const menuItems = [
        {
            icon: <House className='w-[34px] h-[34px] stroke-[#000] dark:stroke-[#fff] ' strokeWidth={0.95} />,
            route: "/",
            name: "home"
        },
        {
            icon: <Search className='w-[34px] h-[34px] stroke-[#000] dark:stroke-[#fff]' strokeWidth={0.95} />,
            route: "/search",
            name: "search"
        }, {
            icon: <User className='w-[34px] h-[34px] stroke-[#000] dark:stroke-[#fff]' strokeWidth={0.95} />,
            route: "/user",
            name: "user"
        }
    ]
    if (path == "/login" || path == "/signup") {
        return;
    }
    return (
        <>
            <div className='pl-[80px]'></div>
            <div className='max-w-[80px] w-full pb-[20px] flex flex-col items-end justify-between fixed h-screen'>
                <button onClick={() => router.push("/")} className='mt-[30px] mx-auto flex items-center justify-center'>
                    <img src="/images/common/light-logo.svg" alt="" className='dark:hidden block w-[34px] h-[]' />
                    <img src="/images/common/dark-logo.svg" alt="" className='dark:block hidden w-[34px] h-[]' />
                </button>
                <div className='flex flex-col gap-[10px]'>
                    {menuItems.map((item, index) => (
                        <button onClick={() => {
                            router.push(item.route);
                        }} key={index + "menuItem"} title={item.name} className={`w-[70px] min-h-[70px] max-h-[70px] flex items-center justify-center hover:bg-[#ddd] dark:hover:bg-[#ddd]/40 ${path == item.route && "dark:bg-[#ddd]/40 bg-[#ddd]"} rounded-[10px] duration-300 ease-in-out transition-all`}>{item.icon}</button>
                    ))}
                    <button onClick={() => {
                        setTheme(theme == "dark" ? "light" : "dark")
                    }} title={"menu"} className='w-[70px] min-h-[70px] max-h-[70px] flex items-center justify-center hover:bg-[#ddd] dark:hover:bg-[#ddd]/40 rounded-[10px] duration-300 ease-in-out transition-all'> <Moon className='w-[34px] h-[34px] stroke-[#fff] hidden dark:block' strokeWidth={0.95} /> <Sun className='w-[34px] h-[34px] stroke-[#000]  block dark:hidden' strokeWidth={0.95} /></button>
                </div>
                <DropdownMenu modal={false} >
                    <DropdownMenuTrigger>
                        <div title={"menu"} className='w-[70px] min-h-[70px] max-h-[70px] flex items-center justify-center hover:bg-[#ddd] dark:hover:bg-[#ddd]/40 rounded-[10px] duration-300 ease-in-out transition-all'> <Menu className='w-[34px] h-[34px] stroke-[#000] dark:stroke-[#fff]' strokeWidth={0.95} /></div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="!left-[20px] top-[-90px] absolute w-[230px] dark:bg-[#000] dark:border-[#ddd]/60 border-[#000]" side="top" >
                        <div className='flex w-full items-center justify-between px-[15px] min-h-[50px] max-h-[40px] border-b dark:border-[#ddd]/60 border-[#000]'>Private profile <Switch /></div>
                        <button className='flex w-full items-center justify-between px-[15px] min-h-[40px] max-h-[40px] hover:bg-[#ddd]/50 rounded-[3px] duration-300 ease-in-out transition-all'>logout <LogOut className='stroke-[#000] dark:stroke-[#fff]' strokeWidth={0.95} /></button>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </>
    )
}

export default Sidebar