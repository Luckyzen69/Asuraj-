import idk from '../../assets/idk.png'

export default function Noti(){
    return ( <>
        <div className='flex border border-collapse p-2'>
            <img src={idk} alt="" className='h-12 rounded-full'/>
            <div className='m-1'>
            <h3 className='font-bold'>Name of person</h3> 
            <p>this is a notification which you are looking for</p>

            </div>
        </div>
    </>)
}