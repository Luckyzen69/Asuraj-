import POV from "./pov"
export default function feed(){
    return(
        <>
       <div className='min-w-max flex-auto  overflow-auto border ' >
        <div className="sticky top-0 z-auto border pl-10  ">
            <h2 className="font-bold text-xl fomt-mono ">Home</h2>
        </div>
        <POV/>
        
       </div>
        </>
    )
}