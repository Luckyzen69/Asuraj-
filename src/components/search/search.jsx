

export default function Search(){
    return (
        <>
        <div className="min-w-max flex-auto border ml-32 mr-32  ">
            <h2 className="font-bold text-center text-2xl"> Search</h2>
            <div className="m-4 relative">
                <form  className=" flex ">
                    <input type="search" placeholder="What are you searching for?" className="border rounded-lg w-96 m-1 p-1 " />
                </form>
               <div className="m-2 ">
                <h1 className="font-bold">What are we?</h1>
                <p>Lagzen Thakuri</p>
                <p>Sobindra Budhathoki</p>
               </div>
            </div>
        </div>
        </>
    )
}