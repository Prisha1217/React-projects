import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function(){
    const data = useLoaderData()
    /* const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[]) */
    return(
        <>
            <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">Github Followers: {data.followers} 
            <img src= {data.avatar_url} alt="Git picture" width={300} />
            </div>
        </>
    )
}

export const githubInfoLoader= async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}