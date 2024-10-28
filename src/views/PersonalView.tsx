import {useEffect, useState} from "react";

import data from "../assets/data/personal.json";

import TopTab from "../components/personal/TopTab.tsx";
import Formatter from "../components/personal/Formatter.tsx";

function PersonalView({callback}: { callback?: any }) {

    const [tab, setTab] = useState(0);

    function updateTab(val: number) {
        setTab(val);

        if (val == data.length - 1) callback({b: false, f: true});
    }

    function scroll(e: any) {
        if (e.deltaY > 0) {
            nextTab();
        } else {
            prevTab();
        }
    }

    function nextTab() {
        if (tab + 1 == data.length - 1) {
            callback({b: false, f: true});
        } else {
            callback({b: false, f: false});
        }

        let t: number = tab == data.length - 1 ? tab : tab + 1;
        setTab(t)
    }

    function prevTab() {
        if (tab - 1 == 0) {
            callback({b: true, f: false});
        } else {
            callback({b: false, f: false});
        }

        let t: number = tab == 0 ? tab : tab - 1;
        setTab(t)
    }

    useEffect(() => {
        callback({b: false, f: false});
    }, [])

    return (
        <div className="text-white h-full bg-1-background flex flex-col" onWheel={scroll}>

            {/* The top file selector pane */}
            <div className="flex justify-start items-center">

                <div className="flex">
                    {data.map((line, index) => (
                        <TopTab text={line.title} active={tab == index} runClick={() => updateTab(index)} key={index}
                                lang={line.lang}/>
                    ))}
                </div>

            </div>

            {/* Center pane */}
            <div className="flex-1 bg-1-pane-background flex flex-col items-start text-2xl w-full select-none">
                <Formatter data={data[tab].data}  lang={data[tab].lang}/>
            </div>

        </div>
    )
}

export default PersonalView
