import pointer from "../../assets/img/icons/pointer.svg";
import {useEffect, useRef, useState} from "react";
import Draggable from 'react-draggable';

function SmallTimeline({duration, seconds, callback}: { duration: number, seconds: number, callback: any }) {

    const nodeRef = useRef(null);

    const [dragging, setDragging] = useState(false);
    const [width, setWidth] = useState(0);
    const [position, setPosition] = useState({x: 0, y: 0});


    useEffect(() => {

        if (!isNaN(seconds)) {
            // @ts-ignore
            let w = document.getElementById("smallTimeline").offsetWidth;

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
        <div className="px-5 flex-1">

            <div className="w-full h-full" id="smallTimeline">

                <div className="-ml-[10px]">
                    <Draggable position={position} onStart={startDrag} onStop={stopDrag} axis="x"
                               bounds={{top: 0, left: 0, right: width, bottom: 0}}
                               nodeRef={nodeRef} onDrag={handleDrag}>
                        <div ref={nodeRef} className="select-none w-fit cursor-grab active:cursor-grabbing">
                            <img src={pointer} className="w-5 pointer-events-none"/>
                        </div>
                    </Draggable>
                </div>

                <div className="text-white vertical-lines h-4 border-b-2 border-4-shadow-light -mt-2">

                </div>


            </div>

        </div>
    )

}

export default SmallTimeline
