import pointer from "../../assets/img/icons/pointer.svg";
import {useEffect, useRef, useState} from "react";
import Draggable from 'react-draggable';
import {AdjustmentsHorizontalIcon, EyeIcon, LockClosedIcon} from "@heroicons/react/24/solid";

function BigTimeline({duration, seconds, title, muted, callback, timeFormat}: {
    duration: number,
    seconds: number,
    title: string,
    muted: boolean,
    callback: any,
    timeFormat: any
}) {

    const nodeRef = useRef(null);

    const [dragging, setDragging] = useState(false);
    const [width, setWidth] = useState(0);
    const [position, setPosition] = useState({x: 0, y: 0});


    useEffect(() => {
        if (!isNaN(seconds)) {
            // @ts-ignore
            let w = document.getElementById("bigTimeline").offsetWidth;

            if (!dragging) {

                let pos = {x: 0, y: 0};
                let timePercent = (seconds / duration);

                pos.x = w * timePercent;
                setPosition(pos);
            }

            setWidth(w);
        }
    }, [seconds])

    // @ts-ignore
    function handleDrag(e: any, ui: any) {
        if (!isNaN(seconds)) {
            setPosition(ui);

            let posPercent = (position.x / width);

            if (!isNaN(posPercent)) {
                callback((duration * posPercent));
            }
        }
    }

    function startDrag() {
        setDragging(true);
    }

    function stopDrag() {
        setDragging(false);
    }

    return (
        <div className="flex h-full px-1 pb-2 text-white">

            <div className="flex-1 flex flex-col h-full border border-4-shadow-light overflow-y-hidden">

                <div className="flex-1  w-full flex ">

                    <div className="min-w-[208px] pl-2 text-sm text-4-blue select-none">
                        {timeFormat(seconds)}
                    </div>

                    <div className="border-l border-4-shadow-light w-full pr-2 pb-1 flex flex-col">

                        <div className="-ml-[6px]">
                            <Draggable position={position} onStart={startDrag} onStop={stopDrag} axis="x"
                                       bounds={{top: 0, left: 0, right: width, bottom: 0}}
                                       nodeRef={nodeRef} onDrag={handleDrag}>
                                <div ref={nodeRef} className="select-none cursor-pointer w-fit">
                                    <img src={pointer} className="w-3 pointer-events-none"/>


                                    <div className="ml-[5px] -mt-1 h-screen w-0.5 bg-4-blue absolute"></div>
                                </div>
                            </Draggable>
                        </div>

                        <div className="-mt-1 w-full border-b border-4-yellow vertical-lines h-3"/>

                    </div>
                </div>

                <div className="w-full">
                    <div className="w-full select-none">
                        <TimelinePart title={title} desc="V1" col="bg-4-purple"/>
                        <TimelinePart title={`Audio: ${muted ? "Muted" : "Playing"}`} desc="A1" col="bg-4-blue-light"/>
                    </div>
                </div>

                <div className="flex-1 pl-[208px] w-full flex ">
                    <div className="border-l border-4-shadow-light"/>
                </div>

            </div>
        </div>
    )

    function TimelinePart({title, desc, col}: { title: string, desc: string, col: string }) {

        return (
            <div className="h-full border-y border-4-shadow-light">

                <div className="w-full h-full flex">

                    <div className="flex bg-4-pane-background-light h-full">

                        <LockClosedIcon className="timeline-butt"/>

                        <div className="timeline-butt flex items-center justify-center bg-4-blue text-xs">
                            <span>{desc}</span>
                        </div>

                        <AdjustmentsHorizontalIcon className="timeline-butt bg-4-background"/>

                        <EyeIcon className="timeline-butt bg-4-background"/>

                        <div className="w-20"/>
                    </div>

                    <div className="pr-2 w-full h-full border-l border-4-shadow-light">
                        <div id="bigTimeline" className={`w-full h-full text-black text-xs px-2 py-1 ${col}`}>
                            <span>{title}</span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default BigTimeline
