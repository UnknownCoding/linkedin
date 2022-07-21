import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HeaderLink from './HeaderLink'
import { motion } from "framer-motion";

const Header = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, resolvedTheme, setTheme } = useTheme()
    useEffect(() => {
        setMounted(true)
    }, [])
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30,
    };

    
    return (
        <header className='sticky top-0 z-40 bg-white dark:bg-[#1D2226] flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg'>
            <div className='flex items-center space-x-2 w-full max-w-xs relative'>
                {mounted && (
                <>
                    {resolvedTheme === "dark" ? (
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Coccarda_Coppa_Italia.svg" width={45} height={45} />
                    ) : (
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" width={55} height={55} />
                    )}
                </>
                )}
                <div className='flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded w-full'>
                    <SearchRoundedIcon/>
                    <input type='text' placeholder='search' className='hidden md:inline-flex bg-transparent text-sm focus:outline-none focus:ring-0 
                                                                        placeholder-black/70 dark:placeholder-white/75 flex-grow'/>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <HeaderLink Icon={HomeRoundedIcon} text="Home" feed active />
                <HeaderLink Icon={GroupIcon} text="My Network" feed />
                <HeaderLink Icon={BusinessCenterIcon} text="Jobs" feed hidden />
                <HeaderLink Icon={ChatIcon} text="Messaging" feed />
                <HeaderLink Icon={NotificationsIcon} text="Notifications" feed />
                <HeaderLink Icon={Avatar} text="Me" feed avatar hidden />
                <HeaderLink Icon={AppsOutlinedIcon} text="Work" feed hidden />
                {mounted && (
                    <div onClick={()=> setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${resolvedTheme === 'dark' ? 'justify-end' : 'justify-start'}`}>
                        <span className="absolute left-0">🌜</span>
                        <motion.div className='w-5 h-5 bg-white rounded-full z-40 ' layout transition={spring}/>
                        <span className="absolute right-0.5">🌞</span>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header