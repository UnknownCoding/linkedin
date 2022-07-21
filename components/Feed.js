import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { handlePostState, useSSRPostsState } from '../atoms/postAtom';
import InputComp from './InputComp'
import Post from './Post';

const Feed = ({posts}) => {
    const [realtime,setRealtime] = useState([])
    const [handlePost, setHandlePost] = useRecoilState(handlePostState);
    const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);

    useEffect(()=>{
        const fetchPost = async () =>{
            const response = await fetch('/api/posts',{
                method:'GET',
                headers:{'Content-Type':'application/json'}
            });
            const responsedata = await response.json()
            setRealtime(responsedata)
            setHandlePost(false)
            setUseSSRPosts(false)
        };
        fetchPost()
    },[handlePost])
    console.log(realtime)
    return (
        <div className='space-y-6 pb-24 max-w-xl'>
            <InputComp/>
            {!useSSRPosts ? realtime.map((post)=>(
                <Post key={post._id} post={post}/>
            )):
            posts.map((post)=>(
                <Post key={post._id} post={post}/>
            ))}
        </div>
    )
}

export default Feed