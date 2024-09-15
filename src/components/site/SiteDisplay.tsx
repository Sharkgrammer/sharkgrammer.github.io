import {useState} from "react";

interface tempProps {
    title: string;
    url: string;
    desc: string;
    img: string;
}

function SiteDisplay({title, url, desc, img}: tempProps) {

    const [display, setDisplay] = useState(false);
    const [init, setInit] = useState(false);

    function openPage() {
        window.open(url);
    }

    function setHoverStart() {
        setDisplay(true);
        if (!init) setInit(true);
    }

    function setHoverEnd() {
        setDisplay(false);
    }


    return (
        <div className="card cursor-pointer overflow-hidden w-96 h-56" onClick={openPage} onMouseEnter={setHoverStart}
             onMouseLeave={setHoverEnd}>

            <div className="grid [grid-template-areas:'stack'] h-full w-full">
                <div className="[grid-area:stack]">
                    <img className="h-full w-full" src={img}/>
                </div>

                <div className="[grid-area:stack] grid h-full">

                    <div className="flex justify-center items-center">
                        <h1 className={"text-4xl font-bold text-stroke text-white stroke-black " + (display ? "animate-slide-up" : (init && "animate-slide-down"))}>{title}</h1>
                    </div>

                    {display && (
                        <div
                            className="flex items-center justify-center bg-black opacity-80 animate-slide-up-op">
                            <h1 className="text-white px-4 font-bold">{desc}</h1>
                        </div>
                    )}

                </div>
            </div>


        </div>
    )
}

export default SiteDisplay