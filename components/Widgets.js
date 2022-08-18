import React, { useEffect, useState } from 'react'
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import Image from "next/image";
import { format } from 'timeago.js';

const Widgets = ({articles}) => {
    const [mount,setMout] = useState(false)
    useEffect(()=>{
        setMout(true)
    },[])
    return (
        <>
        {articles.length > 0 && (
            <div className='hidden xl:inline space-y-2'>
                <div className='bg-white dark:bg-[#1D2226] py-2.5 rounded-lg space-y-2 w-11/12 overflow-hidden border border-gray-300 dark:border-none'>
                    <div className='flex items-center justify-between font-bold px-10'>
                        <h4>LinkedIn News</h4>
                        <InfoRoundedIcon className="h-5 w-5" />
                    </div>
                    <div className='space-y-1'>
                        {articles.slice(0,5).map((article)=>(
                            <div key={article.url} className='flex space-x-2 items-center cursor-pointer hover:bg-black/10 dark:hover:bg-black/50 px-2.5 py-4'>
                                <FiberManualRecordRoundedIcon className="!h-2 !w-2" />
                                <div>
                                    <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                                    {article.title}
                                    </h5>
                                    <p className="text-xs mt-0.5 dark:text-white/75 opacity-80">
                                        {format(article.publishedAt)}
                                    </p> 
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='bg-white dark:bg-[#1D2226] w-11/12 h-64 px-2.5 rounded-lg sticky top-20 border border-gray-300 dark:border-none '>
                    {mount && (
                        <div className="relative w-full h-full ">
                            <Image
                                src="https://images.genius.com/59f01ca3cbb642aed24e7201600e8376.1000x1000x1.jpg"
                                layout="fill"
                                objectFit="contain"
                                priority
                            />
                        </div> 
                    )}
                </div>
            </div>

        )}
        </>
    )
}

export default Widgets