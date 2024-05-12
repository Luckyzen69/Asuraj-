import idk from '../../assets/idk.png'

export default function Noti(){
    return ( <>
        <div className='flex border border-collapse p-2'>
            <img src={idk} alt="" className='h-12 rounded-full'/>
            <div className='m-1'>
            <h3 className='font-bold'>Someone</h3>

            <div className='flex space-x-48'>
            <p>Someone liked this post.</p>
            <p> 6 mins ago</p>
                </div> 
            </div>
        </div>
    </>)
}