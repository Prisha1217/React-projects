import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userid}= useParams()
    return(
        <>
            <div className="bg-black text-white font-bold text-center px-4 py-3 text-3xl"> User:  {userid}</div>

        </>
    )
} 