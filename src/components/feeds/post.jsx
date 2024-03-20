import J from '../../assets/j.png'
import { MdVerified } from "react-icons/md";
import We from "../../assets/we.jpg"
import { CiHeart } from "react-icons/ci";
import { BiRepost } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Forest from '../../assets/forest.jpg';
export default function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}){
   
    return (
    <>
    <div className='overflow-y-hidden border border-collapse'>

    <div className="post m-2 flex items-start pb-2">

        <div className=''>
        <img src={J} alt="" className='h-12'  />
        </div>

        <div className='body flex '>
           <div className='header '>
            <div className='flex m-2'>
                <h3 className='flex '>Lagzen Thakuri{""}
                <span><MdVerified className='m-2 text-center text-cyan-600'/> </span>
                </h3>
            </div>
            <p>How you like that</p>
           </div>
        </div>
         </div>
        <img src={Forest} alt="" className='h-64 object-cover w-auto rounded-md ' />
         <div className='flex text-3xl space-x-24 m-2'>
         <span className='flex '>  <FaHeart className='text-red-800 '/> <span className='text-2xl ml-2 mb-2'>20.4k</span></span>
           <span className='flex '> <FaRegComment /> <span className='text-2xl ml-2 mb-2'>5k</span></span>
            <BiRepost className='text-4xl' />
            <FaShare />
         </div>
    </div>
    </>
    )
}