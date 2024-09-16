import {useState} from "react";

interface tempProps {
    title: string;
    ratings: number;
    img: string;
    url: string;
    giturl: string;
    gitstars: string;
}

function WatchDisplay({title, img, url}: tempProps) {

    const [display, setDisplay] = useState(false);

    function openPage() {
        window.open(url);
    }

    function setHoverStart() {
        setDisplay(true);
    }

    function setHoverEnd() {
        setDisplay(false);
    }


    return (
        <div className="card cursor-pointer text-center overflow-hidden grid grid-cols-1" onClick={openPage}
             onMouseEnter={setHoverStart} onMouseLeave={setHoverEnd}>

            <div className={"flex w-full h-full justify-center items-center px-1 " + (display ? "bg-gray-50" : "bg-white") }>
                <img className="w-40" src={img}/>
            </div>

            <div
                className={"grid [grid-template-areas:'stack'] px-1 text-white " + (display ? "bg-gray-700" : "bg-gray-800")}>

                <div className="flex justify-center items-center h-20 [grid-area:stack]">
                    <h1 className="text-xl font-bold">{title}</h1>
                </div>

            </div>

        </div>
    )
}

export default WatchDisplay