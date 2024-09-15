import {ChartBarIcon, StarIcon} from "@heroicons/react/24/outline";
import GitHubIcon from "../../assets/img/github.svg";

interface tempProps {
    title: string;
    ratings: number;
    img: string;
    url: string;
    giturl: string;
    gitstars: string;
}

function WatchDisplay({title, ratings, img, url, giturl, gitstars}: tempProps) {

    function openPage() {
        window.open(url);
    }

    return (
        <div className="card cursor-pointer overflow-hidden grid grid-cols-2" onClick={openPage}>

            <div className="flex w-full h-full justify-center items-center">
                <img className="w-40" src={img}/>
            </div>

            <div className="grid [grid-template-areas:'stack'] bg-black text-white">

                <div className="flex justify-center items-center [grid-area:stack]">
                    <h1 className="w-40 text-2xl font-bold">{title}</h1>
                </div>

                <div className="flex items-end w-full h-full [grid-area:stack] pb-1">

                    <div className="grid grid-cols-2 w-full px-2 items-center">
                        <div className="">
                            {giturl && (
                                <img className="w-10 text-red-500" src={GitHubIcon}/>
                            )}
                        </div>

                        <div className="flex items-end justify-end gap-2">

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