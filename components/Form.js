import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { handlePostState } from '../atoms/postAtom';

const Form = () => {
    const [input,setInput] = useState('')
    const [photo,setPhoto] = useState('')
    const [modalOpen, setModalOpen] = useRecoilState(modalState);
    const [handlePost, setHandlePost] = useRecoilState(handlePostState);
    const {data:session} = useSession()
    const uploadPost = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/posts',{
            method:'POST',
            body:JSON.stringify({
                input:input,
                photoUrl:photo,
                username:session.user.name,
                email:session.user.email,
                userImg:session.user.image,
                createdAt: new Date().toString()
            }),
            headers:{
                'Content-Type':'application/json'
            },
        })
        const responsedata=await response.json();
        setHandlePost(true)
        setModalOpen(false);
    }

    return (
        <form className='flex flex-col relative space-y-2 text-black/80 dark:text-white/75'>
            <textarea rows='4' placeholder='What do you want to talk about ' className='bg-transparent focus:outline-none dark:placeholder-white/75 ' value={input} onChange={(e)=> setInput(e.target.value) }/>
            <input type='text' placeholder='Add A Photo URL' className='truncate bg-transparent focus:outline-none max-w-xs md:max-w-sm dark:placeholder-white/75' value={photo} onChange={(e)=> setPhoto(e.target.value) } />
            <button disabled={!input.trim() && !photo.trim()} type='submit' onClick={uploadPost} className='absolute -bottom-2 right-0 font-medium bg-blue-400 hover:bg-blue-500 disabled:text-black/40 disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1'>Post </button>
        </form>
    )
}

export default Form