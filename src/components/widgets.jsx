import { IoFootball } from "react-icons/io5";
import { BsMusicNoteList } from "react-icons/bs";


export default function (){
    return (
        <>
        <div className="border p-10 m-2 sticky top-0 ">

        <h2 className="font-bold">Excited or Depressed</h2>
        <div className="space-y-5 font-mono">
            <h2 className="font-bold font-mono flex "><span className="text-xl"><IoFootball/></span>#Football </h2>
            <div>
                <p>Man City vs Real Madrid</p>
                <p>Date: April 11, 2024</p>
            </div>
            <hr />
            <div>
                <p>Barca vs Psg</p>
                <p>Date: April 11, 2024</p>
            </div>
            <hr />
            <div>
                <p>Bayern vs Arsenal</p>
                <p>Date: April 11, 2024</p>
            </div>
            <hr />
            <div>
                <p>Atletico vs BVB  </p>
                <p>Date: April 11, 2024</p>
            </div>
            <hr />
        <h2 className="font-bold font-mono flex"><span className="text-xl"><BsMusicNoteList/></span>#Music</h2>
        <div>
                <p> Radiohead</p>
                <p>Song: No suprises</p>
            </div>
            <hr />
        <div>
                <p> Lord Huron</p>
                <p>Song: The night we met</p>
            </div>
            <hr />
        </div>
        </div>
        </>
    )
}