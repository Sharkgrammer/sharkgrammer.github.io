import './PersonalView.css'
import {useState} from "react";

import data from "../../assets/data/personal.json";

import TopTab from "../../components/personal/TopTab.tsx";
import JSONFormat from "../../components/personal/JSONFormat.tsx";

function PersonalView() {

    const [tab, setTab] = useState(0);

    function updateTab(val: number) {
        setTab(val)
    }

    return (
        <div className="h-full text-white">

            {/* The top file selector pane */}
            <div className="flex justify-start items-center">

                <div className="flex">
                    {data.map((line, index) => (
                        <TopTab text={line.title} active={tab == index} runClick={() => updateTab(index)} key={index}/>
                    ))}
                </div>


            </div>

            <div className="bg-1-pane-background flex flex-col items-start text-2xl w-full select-none">
                <JSONFormat data={data[tab].data}/>
            </div>

        </div>
    )
}

export default PersonalView
