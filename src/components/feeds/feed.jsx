import Post from "./post"
import POV from "./pov"
import '../../index.css'
export default function feed(){
    return(
        <>
       <div className='feed min-w-max flex-auto border ml-32 mr-32   ' >
        <div>
            <h2 className="font-bold text-xl fomt-mono ">Home</h2>
        </div>
        <hr />
        <POV/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
       </div>
        </>
    )
}