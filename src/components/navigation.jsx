  import { Link } from 'react-router-dom'
  import { BiHomeHeart,BiSearchAlt } from "react-icons/bi";
  import { TbMessage } from "react-icons/tb";
  import { LiaHotjar } from "react-icons/lia";
  import { ImProfile } from "react-icons/im";
  import Idk from '../assets/idk.png';
  import SidebarOption from './sidebarOption';
  import '../index.css'
  

  export default function Navigation(){
      return ( 
          <>
          <section className='sticky top-0'>

  <div className='flex p-2 m-2 '>
  <img src={Idk} alt="logo" className='h-10 w-10 m-2 rounded-md' />
  <h1 className='text-4xl font-serif m-2'>Asuraj</h1>
  </div>

  <div className='flex flex-col    '>

<SidebarOption active text="Home" Icon={BiHomeHeart} />
<SidebarOption text="Search" Icon={BiSearchAlt} />
<SidebarOption text="Message" Icon={TbMessage} />
<SidebarOption text="Notifications" Icon={LiaHotjar} />
<SidebarOption text="Profile" Icon={ImProfile} />
<button variant="outlined" className="" fullWidth></button>
  </div>
  </section>
          </>
      )
  }