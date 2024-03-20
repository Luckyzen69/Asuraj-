  import { Link } from 'react-router-dom'
  import { BiHomeHeart,BiSearchAlt } from "react-icons/bi";
  import { TbMessage } from "react-icons/tb";
  import { LiaHotjar } from "react-icons/lia";
  import { ImProfile } from "react-icons/im";
  import Idk from '../../assets/idk.png';
  import SidebarOption from './sidebarOption';
  import '../../index.css'

  export default function Navigation(){
      return ( 
          <>
          <section className='sticky top-0'>

  <div className='flex p-2 m-2 '>
  <img src={Idk} alt="logo" className='h-10 w-10 m-2 rounded-md' />
  <h1 className='text-4xl font-serif m-2'>Asuraj</h1>
  </div>

  <div className='flex flex-col    '> 

<Link to="/home"><SidebarOption active text="Home" Icon={BiHomeHeart} /></Link>
<Link to="/search"><SidebarOption text="Search" Icon={BiSearchAlt}  /></Link>
<Link to="messages"><SidebarOption text="Message" Icon={TbMessage} /></Link>
<Link to="/notifications"><SidebarOption text="Notifications" Icon={LiaHotjar}  /></Link>
<Link to="/profile"><SidebarOption text="Profile" Icon={ImProfile}  /></Link>
<button variant="outlined" className=" text-3xl font-mono border rounded-lg border-slate-950 hover:bg-slate-900 hover:text-white  " >Post</button>
  </div>
  </section>
          </>
      )
  }