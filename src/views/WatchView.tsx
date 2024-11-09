import {useEffect, useState} from "react";

import data from "../assets/data/watchfaces.json";
import Slide from "../components/watch/Slide.tsx";
import SlidePreview from "../components/watch/SlidePreview.tsx";
import DocHeader from "../components/common/DocHeader.tsx";
import DocTabs from "../components/common/DocTabs.tsx";

function WatchView({callback, end}: { callback?: any, end?: boolean  }) {

    const [slide, setSlide] = useState(0);
    const [slideChange, setSlideChange] = useState({forward: true, active: false});
    const [blockScroll, setBlockScroll] = useState(false);

    useEffect(() => {
        callback({b: true, f: false});

        if (end) {
            setSlide(data.length - 1);
            callback({b: false, f: true});
        } else {
            callback({b: true, f: false});
        }

    }, [])

    function scroll(e: any) {
        if (e.deltaY > 0) {
            startFAnim();
        } else {
            startBAnim();
        }
    }

    function startFAnim() {
        if (blockScroll) return;
        setSlideChange({forward: true, active: true});
        setBlockScroll(true);

        if (slide == data.length - 1) {
            // Moving forward when slide is 2 is moving to the next page
            // This fixes a bug
            return;
        } else {
            setTimeout(endFAnim, 500);
        }
    }

    function endFAnim() {
        setSlideChange({forward: true, active: false});

        let s: number = slide == data.length - 1 ? slide : slide + 1;
        setSlide(s);
        setTimeout(() => allowMoveAgain(s), 500);
    }

    function startBAnim() {
        if (blockScroll) return;
        setSlideChange({forward: false, active: true});
        setBlockScroll(true);

        setTimeout(endBAnim, 500);

    }

    function endBAnim() {
        setSlideChange({forward: false, active: false});

        let s: number = slide == 0 ? slide : slide - 1
        setSlide(s);

        setTimeout(() => allowMoveAgain(s), 500);
    }

    function allowMoveAgain(slide: number) {
        setBlockScroll(false);

        switch (slide) {
            case 0:
                callback({b: true, f: false});
                break;
            case data.length - 1:
                callback({b: false, f: true});
                break;
            default:
                callback({b: false, f: false});
                break;
        }
    }

    // For basic clicks to work as intended
    function startAnimation() {
        if (blockScroll) return;

        setSlideChange({forward: true, active: true});
        setBlockScroll(true);

        setTimeout(endAnimation, 500);
    }

    function endAnimation() {
        setSlideChange({forward: true, active: false});

        let s: number = slide == data.length - 1 ? 0 : slide + 1;
        setSlide(s);
        setTimeout(() => allowMoveAgain(s), 500);
    }

    return (
        <div className="h-full bg-2-background font-semibold flex flex-col" onClick={startAnimation} onWheel={scroll}>

            {/* Top Pane */}
            <DocHeader title="Watch Face Presentation" colour="bg-2-primary"/>

            <DocTabs colour="bg-2-pane-background" border="border-2-shadow" text="text-2-text-dim"/>

            {/* Center & Left Panes */}
            <div className="h-full flex-1 flex">

                <div className="border-r-2 border-2-shadow flex justify-center p-5 max-w-powerPane">

                    {/* Preview slideshow content goes here*/}
                    <div className="w-full flex flex-col gap-4">

                        {data.map((preview: any, index: number) => (
                            <SlidePreview data={preview} key={index} active={index == slide} number={index + 1}/>
                        ))}

                    </div>

                </div>

                <div className="py-2 w-full h-full flex justify-center items-center overflow-hidden">

                    {/* Slideshow content goes here*/}
                    <div
                        className={`bg-white h-full aspect-video max-w-5/6 max-h-5/6 rounded shaded-border
                         ${slideChange.forward ? (slideChange.active ? "animate-slide-out-2" : "animate-slide-up-2") :
                            ((slideChange.active ? "animate-slide-down-2" : "animate-slide-in-2"))}`}>

                        <Slide data={data[slide]}/>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default WatchView
