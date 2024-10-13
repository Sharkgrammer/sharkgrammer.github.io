import {useEffect, useState} from "react";

import data from "../assets/data/projects.json";

import DocHeader from "../components/common/DocHeader.tsx";
import DocTabs from "../components/common/DocTabs.tsx";
import BottomTab from "../components/project/BottomTab.tsx";
import GenerateCells from "../components/project/GenerateCells.tsx";
import PivotPanel from "../components/project/PivotPanel.tsx";

interface cell {
    h: number;
    w: number
    l: number,
    t: number
}

interface cells {
    title: cell;
    desc: cell,
    image: cell,
    repo: cell,
    site: cell
}

function ProjectView({callback}: { callback?: any }) {

    let defCells: cells = {
        title: {h: 3, w: 3, l: 1, t: 1},
        desc: {h: 5, w: 3, l: 1, t: 5},
        image: {h: 9, w: 6, l: 5, t: 1},
        repo: {h: 1, w: 2, l: 12, t: 4},
        site: {h: 1, w: 2, l: 12, t: 6}
    }

    const [tab, setTab] = useState(0);
    const [cellWidths, setCellWidths] = useState(defCells);

    function scroll(e: any) {
        if (e.deltaY > 0) {
            nextTab();
        } else {
            prevTab();
        }
    }

    function updateTab(val: number) {
        setTab(val);

        if (val == data.length - 1) callback({b: false, f: true});
        if (val == 0) callback({b: true, f: false});
    }

    // Generates cells to just out of the users viewport
    function getGenWidth() {
        return Math.ceil(window.innerWidth / 80);
    }

    function getGenHeight() {
        return Math.ceil(window.innerHeight / 32);
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

        callback({b: true, f: false});

        if (!data[tab].site) {
            defCells.repo.t = 5;
        } else {
            defCells.repo.t = 4;
        }

        setCellWidths(defCells);
    }, []);

    return (
        <div className="h-full bg-3-background font-semibold flex flex-col" onWheel={scroll}>

            {/* Top Pane */}
            <DocHeader title="Interesting-Projects-Sheet.xlsx" colour="bg-3-primary"/>

            <DocTabs colour="bg-3-pane-background" border="border-3-shadow" text="text-3-text-dim"/>

            {/* Center & Left Panes */}
            <div className="grid h-full w-full flex-1 overflow-hidden [grid-template-areas:'stack']">

                <div className="[grid-area:stack] w-full h-full">

                    <GenerateCells w={getGenWidth()} h={getGenHeight()}/>

                </div>

                <PivotPanel data={cellWidths.title}>
                    <div
                        className="text-2xl text-center und font-semibold h-full w-full flex items-center justify-center p-2">
                        <h1 className="">{data[tab].title}</h1>
                    </div>
                </PivotPanel>

                <PivotPanel data={cellWidths.desc}>
                    <div className="font-normal h-full w-full p-2 flex flex-col justify-center items-center gap-1">
                        <p className="text-base">{data[tab].desc}</p>

                        {data[tab].desc2 && (
                            <p className="text-base border-t border-black pt-1">{data[tab].desc2}</p>
                        )}
                    </div>
                </PivotPanel>

                <PivotPanel data={cellWidths.image}>

                    <div className="h-full w-full flex items-center justify-center overflow-hidden">
                        <img src={data[tab].img} className="h-fill w-full"/>
                    </div>

                </PivotPanel>

                <PivotPanel data={cellWidths.repo}>

                    <a className="h-full w-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
                       href={data[tab].repo}>
                        <p className="underline text-blue-400 cursor-pointer">Click for GitHub</p>
                    </a>

                </PivotPanel>

                {data[tab].site && (
                    <PivotPanel data={cellWidths.site}>

                        <a className="h-full w-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
                           href={data[tab].site}>
                            <p className="underline text-blue-400">Click to Visit Site</p>
                        </a>

                    </PivotPanel>
                )}

            </div>

            {/* Bottom Pane & Tabs */}
            <div className="pb-5 pl-16">

                <div className="flex justify-start items-center gap-1 text-xl">
                    {data.map((line, index) => (
                        <BottomTab text={line.tab} active={tab == index} runClick={() => updateTab(index)} key={index}/>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default ProjectView
