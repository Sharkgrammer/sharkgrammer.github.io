import {ArrowLeftCircleIcon, ArrowRightCircleIcon, HomeIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import PersonalView from "./PersonalView.tsx";
import WatchView from "./WatchView.tsx";
import ProjectView from "./ProjectView.tsx";
import VideoView from "./VideoView.tsx";
import RepoView from "./RepoView.tsx";

function ComboView() {

    const [navDark, setNavDark] = useState(true);
    const [view, setView] = useState(0);
    const [compReady, setCompReady] = useState({b: false, f: false});

    function scroll(e: any) {
        if (e.deltaY > 0) {
            nextView();
        } else {
            prevView();
        }
    }

    function callback(ready: any) {
        setCompReady(ready);
    }

    function homeView() {
        setView(0);
        setNav(0);
    }

    function nextView() {
        if (compReady.f) {
            buttNext();
        }
    }

    function buttNext() {
        let v = view == 4 ? view : view + 1;
        setView(v);
        setNav(v);
    }

    function prevView() {
        if (compReady.b) {
            buttPrev();
        }
    }

    function buttPrev() {
        let v = view == 0 ? view : view - 1
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

    return (
        <div className="min-h-screen h-screen" onWheel={scroll} >
            {/* NAV BUTTONS */}
            <div className="flex absolute bottom-2 right-2 text-white">

                <ArrowLeftCircleIcon className={`nav-butt-${navDark ? "dark" : "light"}`} onClick={buttPrev}/>
                <HomeIcon className={`nav-butt-${navDark ? "dark" : "light"}`} onClick={homeView}/>
                <ArrowRightCircleIcon className={`nav-butt-${navDark ? "dark" : "light"}`} onClick={buttNext}/>

            </div>

            {/* DESKTOP CONTENT */}
            <div className="h-full w-full">

                {view == 0 && (
                    <PersonalView callback={callback}/>
                ) || view == 1 && (
                    <WatchView callback={callback}/>
                ) || view == 2 && (
                    <ProjectView callback={callback}/>
                ) || view == 3 && (
                    <VideoView callback={callback}/>
                ) || view == 4 && (
                    <RepoView callback={callback}/>
                )}

            </div>


            {/* MOBILE CONTENT */}
            <div>

            </div>

        </div>
    )
}

export default ComboView
