import TopCell from "./TopCell.tsx";
import NumCell from "./NumCell.tsx";
import Cell from "./Cell.tsx";

function GenerateCells({w, h}: {w:number, h:number}) {

    const topChars = Array.from({length: w}, (_, i) => String.fromCharCode(65 + i));

    return (
        <div>
            <div className="flex">

                <div className="numcell border-b-2 border-r-2 border-3-shadow-dark"/>

                <div className="w-full flex text-xl font-bold overflow-hidden">

                    {topChars.map((char, index) => (
                        <TopCell char={char} key={index}/>
                    ))}

                </div>
            </div>


            <div className="">

                {Array.from({length: h}).map((_, i) => (

                    <div className="flex" key={i}>

                        <NumCell num={i + 1}/>

                        {Array.from({length: w}).map((_, i) => (
                                <Cell key={i}/>
                        ))}

                    </div>

                ))}

            </div>
        </div>
    )
}

export default GenerateCells
