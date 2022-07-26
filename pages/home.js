import Image from 'next/image'
import React from 'react'
import HeaderLink from '../components/HeaderLink'
import ExploreIcon from '@mui/icons-material/Explore';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getProviders, signIn } from "next-auth/react";


const home = ({providers}) => {
    return (
    <div className='space-y-10'>
        <header className='flex  justify-between sm:justify-evenly items-center py-4'>
            <div className=' ml-2 sm:!ml-0 relative w-36 h-10'>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" layout='fill' objectFit="contain" />
            </div>
            <div className='flex items-center sm:divide-x divide-gray-300'>
                <div className='hidden sm:flex space-x-8 pr-4'>
                    <HeaderLink Icon={ExploreIcon} text='Discover'/>
                    <HeaderLink Icon={GroupIcon} text='People'/>
                    <HeaderLink Icon={OndemandVideoIcon} text='Learning'/>
                    <HeaderLink Icon={BusinessCenterIcon} text='Jobs'/>
                </div>
                {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                        <div className="pl-4">
                            <button
                            className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2"
                            onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                                Sign in
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </header>
        <main className='flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto     '>
            <div className='space-y-6 xl:space-y-10 '>
                <h1 className='text-3xl md:text-5xl text-amber-800/80 max-w-xl leading-snug pl-4 '>Welcome to your professional community</h1>
                <div className='space-y-4'>
                    <div className='intent'>
                        <h2 className='text-xl'>Search for a job </h2>
                        <ArrowForwardIosIcon className='text-gray-700'/>
                    </div>
                    <div className='intent'>
                        <h2 className='text-xl'>Find a person you know </h2>
                        <ArrowForwardIosIcon className='text-gray-700'/>
                    </div>
                    <div className='intent'>
                        <h2 className='text-xl'>Learn a new skill </h2>
                        <ArrowForwardIosIcon className='text-gray-700'/>
                    </div>
                </div>
            </div>
            <div className='relative xl:absolute w-80 h-80 xl:w-[450px] xl:h-[450px] xl:top-20 xl:right-20'>
                <Image src="https://olc.org/wp-content/uploads/2021/07/LinkedIn-Learning-Graphic-for-Libraries-300x274.png"  layout="fill"  />
            </div>
        </main>
    </div>
    )
}

export default home

export async function getServerSideProps(context) {
    const providers = await getProviders();

    return {
        props: {
            providers,
        },
    };
}