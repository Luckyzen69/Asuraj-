import J from '../assets/j.png'
import { CiImageOn } from "react-icons/ci";
import { FaCameraRetro } from "react-icons/fa";
import { BsEmojiSunglasses } from "react-icons/bs";

export default function POV(){
    return(
        <>
         <div  className='pr-10' >
          <form className='p-4'>
            <div className=' flex ' >
                <img src={J} alt="" className='h-12'  />
                    <textarea type="text" placeholder="What you thinking mate? " className=' flex flex-1 ml-2 overscroll-y-none'/>
                </div>
                <div className='flex justify-start text-center space-x-10'>
                   <CiImageOn type="text" src="" alt="" placeholder='input your image'className='text-3xl m-2' />
                   <FaCameraRetro type="text" src="" alt="" placeholder='input your image'className='text-2xl m-2' />
                   <BsEmojiSunglasses type="text" src="" alt="" placeholder='input your image'className='text-2xl m-2' />

                </div>
                   <button className='flex flex-1 ml-2 border rounded-md p-2 pl-4 pr-4 bg-slate-800 text-white'>Post</button>
          </form>
            
        </div>
        <hr />
        </>
    )
}