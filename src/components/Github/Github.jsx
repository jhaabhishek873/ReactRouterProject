import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    //method -1
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/jhaabhishek873')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    //method -2 using loader
    const data = useLoaderData();
  return (
    <>
        <h1 className='text-center m-4 bg-gray-600 text-white
        p-4 text-3xl'>Github Followers: {data.followers} </h1>
        <div className='flex justify-end'>
        <img src={data.avatar_url} alt="Git picture"  className='w-1/3 p-4'/>
        <div className='bg-yellow-400 p-4 w-2/3'>
            <ul className='flex flex-col gap-6 justify-center align-middle'>
                <li><b>{data.name}</b></li>
                <li>{data.bio}</li>
                <li><b>Total Repository: {data.public_repos}</b></li>
                <li><b>Profile url:</b> <a href={data.html_url}> Profile Link</a></li>
                <li><b>Last Update</b> : {data.updated_at}</li>
            </ul>
        </div>
        </div>

        
    </>

  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}