import { Link } from 'react-router-dom'
import { BiHomeHeart,BiSearchAlt } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";
import { LiaHotjar } from "react-icons/lia";
import { ImProfile } from "react-icons/im";
import Idk from '../assets/idk.png';


export default function Navigation(){
    return (
        <>
         <section className='relative'>

<div className='flex p-2 m-2'>
 <img src={Idk} alt="logo" className='h-10 w-10 m-2 rounded-md' />
 <h1 className='text-4xl font-serif m-2'>Asuraj</h1>
</div>
<div className='flex '>
 <ul className='flex flex-col border space-y-10 p-10 text-xl'>
   <li className='hover:ring-2 rounded flex items-center'><Link to={"/"}><BiHomeHeart />Home</Link></li>
   <li className='hover:ring-2 rounded'><Link to={"/"}><BiSearchAlt/>Search</Link></li>
   <li className='hover:ring-2 rounded'><Link to={"/"}><TbMessage/>Message</Link></li>
   <li className='hover:ring-2 rounded'><Link to={"/"}><LiaHotjar/>Notifications</Link></li>
   <li className='hover:ring-2 rounded'><Link to={"/"}><ImProfile/>Profile</Link></li>
 </ul>
</div>
</section>
        </>
    )
}