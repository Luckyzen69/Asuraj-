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
          <section className=' '>

  <div className='flex p-2 m-2 lg:sticky fixed  '>
  <img src={Idk} alt="logo" className='h-10 w-10 lg:m-2 rounded-md hidden md:block' />
  <h1 className='text-4xl font-serif m-2 text-violet hidden lg:block'>Asuraj</h1>
  </div>

  <div className='flex lg:flex-col fixed  bottom-0 lg:top-24 flex-row  md:right-24 lg:left-10 lg:right-auto bg-white lg:border-none'> 

<Link to="/home"><SidebarOption active text="Home" Icon={BiHomeHeart} /></Link> <hr />
<Link to="/search"><SidebarOption text="Search" Icon={BiSearchAlt}  /></Link> <hr />
<Link to="messages"><SidebarOption text="Message" Icon={TbMessage} /></Link> <hr />
<Link to="/notifications"><SidebarOption text="Notifications" Icon={LiaHotjar}  /></Link> <hr />
<Link to="/profile"><SidebarOption text="Profile" Icon={ImProfile}  /></Link> <hr />
<button variant="outlined" className=" text-3xl font-mono border rounded-lg border-slate-950 hover:bg-slate-900 hover:text-white lg:block hidden  " >Post</button>
  </div>
  </section>
          </>
      )
  }