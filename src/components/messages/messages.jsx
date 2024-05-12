import { BiSolidMessageAdd } from "react-icons/bi";

export default function Message(){
    return (
        <>
        <div className="feed min-w-max flex-auto border ml-32 mr-32 ">
            <div className="flex  justify-between text-xl m-2">
            <h1 className="font-bold">Messages</h1>
            <BiSolidMessageAdd />
            </div>
            <div className="m-2 p-4 flex flex-col justify-center items-center ">
                <h1 className="font-bold text-2xl">Welcome to your inbox!</h1>
                <p>Looks like nobody wants to talk to your.</p>
            </div>
            <div className="flex justify-center">
                <button className="border p-4 rounded-full bg-blue-400 text-white font-bold">Write a Message</button>
            </div>
        </div>
        </>
    )
}