import React from "react"

export default function SidebarOption({active,text,Icon}){
    return (
        <>
           <div className={`sidebarOption  text-xl flex p-5 m-2 hover:text-violet  font-bold ${active && 'sidebarOption--active'}`}>
        {Icon && <Icon className="text-2xl mr-2" />}
            <h2 className="cursor-default">{text}</h2>
        </div>
        </>
    )
}