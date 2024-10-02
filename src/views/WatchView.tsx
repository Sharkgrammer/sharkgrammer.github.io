import {useState} from "react";

import data from "../assets/data/watchfaces.json";
import Slide from "../components/watch/Slide.tsx";
import SlidePreview from "../components/watch/SlidePreview.tsx";
import DocHeader from "../components/common/DocHeader.tsx";
import DocTabs from "../components/common/DocTabs.tsx";

function WatchView() {

    const [slide, setSlide] = useState(0);
    const [slideChange, setSlideChange] = useState(false);

    function startAnimation() {
        if (slideChange) return;

        setSlideChange(true);
        setTimeout(endAnimation, 500);
    }

    function endAnimation() {
        setSlideChange(false);

        setSlide(slide >= 2 ? 0 : slide + 1);
    }

    return (
        <div className="h-full bg-2-background font-semibold flex flex-col" onClick={startAnimation}>

            {/* Top Pane */}
            <DocHeader title="Watch Face Presentation" colour="bg-2-primary" />

            <DocTabs colour="bg-2-pane-background" border="border-2-shadow" text="text-2-text-dim" />

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
                        className={`bg-white h-full aspect-video max-w-5/6 max-h-5/6 rounded shaded-border ${slideChange ? "animate-slide-out-2" : "animate-slide-up-2"}`}>

                        <Slide data={data[slide]}/>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default WatchView
