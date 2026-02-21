"use client"

import Image from "next/image"

export default function InformationSection ({icon, title, info}) {
    
    return(
        <div className="flex items-center mb-4">
            <div className="mr-3"><Image src={icon} alt="icon" width={64} height={64} className="rounded-full"/></div>
            <div>
                <div>{title}</div>
                <div>{info}</div>
            </div>
        </div>
    )
}