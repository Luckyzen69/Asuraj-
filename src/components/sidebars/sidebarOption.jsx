import React from "react"

export default function SidebarOption({active,text,Icon}){
    return (
        <>
           <div className={`sidebarOption  text-xl flex p-3  md:p-5 m-2 hover:text-violet  font-bold ${active && 'sidebarOption--active'}`}>
        {Icon && <Icon className="lg:text-2xl mr-2 text-3xl  md:text-5xl " />}
            <h2 className="cursor-default hidden lg:block">{text}</h2>
        </div>
        </>
    )
}