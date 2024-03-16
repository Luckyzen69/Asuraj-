import J from '../assets/j.png'


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
    <div className="post ">
        <div>
        <img src={J} alt="" className='h-12'  />
        </div>
        <div>
            
        </div>
         </div>
    </>
    )
}