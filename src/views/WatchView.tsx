import {useState} from "react";

import data from "../assets/data/watchfaces.json";
import Slide from "../components/watch/Slide.tsx";
import SlidePreview from "../components/watch/SlidePreview.tsx";

function WatchView() {

    const [slide, setSlide] = useState(0);
    const [slideChange, setSlideChange] = useState(false);

    let items: string[] = ["File", "Home", "Insert", "Draw", "Design", "Transitions", "Animations", "Slide Show",
        "Record", "Review", "View", "Help"];

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
            <div className="bg-2-primary flex justify-center items-center h-12 py-2">
                <h1 className="text-xl text-white whitespace-nowrap">Watch Face Presentation</h1>
            </div>

            {/* Top Pane */}
            <div
                className="bg-2-pane-background flex items-center text-lg h-10 text-2-text-dim gap-3 px-3 py-2 border-b-2 border-2-shadow">
                {items.map((item, index) => (
                    <span className="whitespace-nowrap" key={index}>{item}</span>
                ))}
            </div>

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
