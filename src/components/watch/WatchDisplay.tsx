import {ChartBarIcon, StarIcon} from "@heroicons/react/24/outline";
import {useState} from "react";

interface tempProps {
    title: string;
    ratings: number;
    img: string;
    url: string;
    giturl: string;
    gitstars: string;
}

function WatchDisplay({title, ratings, img, url, gitstars}: tempProps) {

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
        <div className="card cursor-pointer overflow-hidden grid grid-cols-2" onClick={openPage}
             onMouseEnter={setHoverStart} onMouseLeave={setHoverEnd}>

            <div className="flex w-full h-full justify-center items-center">
                <img className="w-40" src={img}/>
            </div>

            <div
                className={"grid [grid-template-areas:'stack'] text-white " + (display ? "bg-gray-800" : "bg-gray-900")}>

                <div className="flex justify-center items-center [grid-area:stack]">
                    <h1 className="w-40 text-2xl font-bold">{title}</h1>
                </div>

                <div className="flex items-end w-full h-full [grid-area:stack] pb-1">

                    <div className="grid grid-cols-2 w-full px-2 items-center">

                        {/*
                        <div className="">
                            {giturl && (
                                <img className="w-10 text-red-500" src={GitHubIcon} onClick={openGitHub}/>
                            )}
                        </div>
                        */}

                        <div className="col-start-2 flex items-end justify-end gap-2">

                            {gitstars && (
                                <div>
                                    <StarIcon className="w-10"/>
                                    <p>{gitstars}</p>
                                </div>
                            )}

                            <div>
                                <ChartBarIcon className="w-10"/>
                                <p>{ratings}</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default WatchDisplay