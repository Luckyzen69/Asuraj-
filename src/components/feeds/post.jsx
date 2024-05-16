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
    avatare
}){
   
    return (
    <>
    <div className='overflow-y-hidden border border-collapse'>

    <div className="post m-2 flex items-start pb-2">

        <div className='md:ml-2  '>
        <img src={J} alt="" className='h-10 md:h-12'  />
        </div>

        <div className='body flex '>
           <div className='header '>
            <div className='flex m-2'>
                <h3 className='flex '>Lagzen Thakuri{""}
                <span><MdVerified className='m-1 text-center text-cyan-600'/> </span>
                </h3>
            </div>
            <p className='ml-2'>This is a image of a foresst</p>
           </div>
        </div>
         </div>
         <div className='flex justify-center'>
        <img src={Forest} alt="" className=' h-36 sm:h-72  w-auto rounded-md ml-1 flex justify-center items-center' />
         </div>
         <div className='flex text-2xl md:text-3xl space-x-5 sm:space-x-8 md:space-x-24 m-2'>
         <span className='flex flex-row justify-center items-center '>  <FaHeart className='text-red-800 '/> <span className='text-xl ml-2 mb-2'>20.4k</span></span>
           <span className='flex items-center justify-center flex-row'> <FaRegComment /> <span className='text-xl md:text-2xl ml-2 mb-2'>5k</span></span>
            <BiRepost className='text-4xl' />
            <FaShare />
         </div>
    </div>
    </>
    )
}