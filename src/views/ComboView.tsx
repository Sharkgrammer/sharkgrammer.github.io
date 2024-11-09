import {ArrowLeftCircleIcon, ArrowRightCircleIcon, HomeIcon} from "@heroicons/react/24/outline";
import {useEffect, useRef, useState} from "react";
import PersonalView from "./PersonalView.tsx";
import WatchView from "./WatchView.tsx";
import ProjectView from "./ProjectView.tsx";
import VideoView from "./VideoView.tsx";
import RepoView from "./RepoView.tsx";
import MobileView from "./MobileView.tsx";

function ComboView() {

    const backwards = useRef<boolean>(false);
    const compReady = useRef({b: false, f: false});

    const [navDark, setNavDark] = useState(true);
    const [view, setView] = useState(0);
    const [mobileSite, setMobileSite] = useState(true);

    function scroll(e: any) {
        if (e.deltaY > 0) {
            nextView();
        } else {
            prevView();
        }
    }

    function callback(ready: any) {
        compReady.current = ready;
    }

    function homeView() {
        setView(0);
        setNav(0);
    }

    function nextView() {
        if (compReady.current.f) {
            buttNext();
        }
    }

    function buttNext() {
        backwards.current = false;

        let v = view == 4 ? view : view + 1;
        setView(v);
        setNav(v);
    }

    function prevView() {
        if (compReady.current.b) {
            buttPrev();
        }
    }

    function buttPrev() {
        backwards.current = true;

        let v = view == 0 ? view : view - 1;
        setView(v);
        setNav(v);
    }

    function setNav(v: number) {
        switch (v) {
            case 0:
            case 3:
            case 4:
                setNavDark(true);
                break;
            case 1:
            case 2:
                setNavDark(false);
                break;
        }
    }

    useEffect(() => {
        // Sadly my app designs won't support a mobile device
        // Switch to mobile design instead
        if (window.innerWidth >= 1024) setMobileSite(false);
    })

    return (
        <div className="min-h-screen h-screen" onWheel={scroll}>

            {mobileSite ? (
                <div>
                    {/* MOBILE CONTENT */}
                    <MobileView/>
                </div>
            ) : (
                <div className="h-full w-full">
                    {/* NAV BUTTONS */}
                    <div className="flex absolute bottom-2 right-2 text-white">
                        <ArrowLeftCircleIcon
                            className={`nav-butt-${navDark ? "dark" : "light"} ${view == 0 && "nav-butt-inactive"}`}
                            onClick={buttPrev}/>
                        <HomeIcon className={`nav-butt-${navDark ? "dark" : "light"}`} onClick={homeView}/>
                        <ArrowRightCircleIcon
                            className={`nav-butt-${navDark ? "dark" : "light"} ${view == 4 && "nav-butt-inactive"}`}
                            onClick={buttNext}/>
                    </div>

                    {/* DESKTOP CONTENT */}
                    {view == 0 && (
                        <PersonalView callback={callback} end={backwards.current}/>
                    ) || view == 1 && (
                        <WatchView callback={callback} end={backwards.current}/>
                    ) || view == 2 && (
                        <ProjectView callback={callback} end={backwards.current}/>
                    ) || view == 3 && (
                        <VideoView callback={callback}/>
                    ) || view == 4 && (
                        <RepoView callback={callback}/>
                    )}

                </div>
            )}

        </div>
    )
}

export default ComboView
