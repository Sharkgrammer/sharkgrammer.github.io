import {useState, useRef} from "react";

import data from "../assets/data/videos.json";

import ReactPlayer from 'react-player/youtube'
import VidPreview from "../components/video/VidPreview.tsx";
import VidTab from "../components/video/VidTab.tsx";

function VideoView() {

    const player = useRef(null);

    const [duration, setDuration] = useState(0);
    const [secondsProgressed, setSeconds] = useState(0);
    const [video, setVideo] = useState(0);

    const url = "https://www.youtube.com/watch?v=";

    function changeVid(val: number) {
        setVideo(val);
    }

    function handleDuration(d: any) {
        setDuration(d);
    }

    function handleProress(p: any) {
        setSeconds(p.playedSeconds);
    }

    function convertTime(seconds: number) {
        const h: number = Math.floor(seconds / 3600);
        const m: number = Math.floor((seconds % 3600) / 60);
        const s: number = Math.floor(seconds % 60);

        return `${String(h).padStart(2, '0')};${String(m).padStart(2, '0')};${String(s).padStart(2, '0')}`;
    }

    return (
        <div className="w-full h-full font-semibold flex bg-4-background">

            <div className="w-3/5 h-full flex flex-col vidborder">

                <div className="p-2">
                    <div className="flex gap-2">
                        <VidTab text="Project: Videos" active={true}/>
                        <VidTab text="Media Browser" active={false}/>
                        <VidTab text="Files" active={false}/>
                    </div>
                </div>

                <div className="h-full p-2">
                    <div className="h-full border border-4-shadow-light flex flex-col">

                        <div className="w-full grid grid-cols-2">

                            {data.map((vid, index) => (
                                <div onClick={() => changeVid(index)} key={index}>
                                    <VidPreview video={vid}/>
                                </div>
                            ))}

                        </div>

                        <div className="flex-1"/>

                    </div>
                </div>
            </div>

            <div className="h-full w-full flex flex-col">

                <div className="h-fit flex flex-col vidborder">

                    <div className="p-2">
                        <div className="flex gap-2">
                            <VidTab text={`Program: ${data[video].title}`} active={true}/>
                            <VidTab text="Source: (no clips)" active={false}/>
                        </div>
                    </div>

                    <div className="w-full h-full flex justify-center">
                        <ReactPlayer width="500px" height="280px" url={url + data[video].id} ref={player}
                                     onDuration={handleDuration}
                                     onProgress={handleProress}/>

                    </div>

                    <div className="w-full flex text-xl px-4">
                        <p className="text-4-blue">{convertTime(secondsProgressed)}</p>

                        <div className="flex-1"/>

                        <p className="text-4-text-dim">{convertTime(duration)}</p>
                    </div>

                    <div className="w-full flex px-2">
                        <div className="px-5 bg-gray-500 h-5 flex-1">
                            A timeline thing
                        </div>
                    </div>
                </div>

                <div
                    className="h-full flex-1 flex flex-col vidborder text-white">

                    <div className="p-2">
                        <div className="flex gap-2">
                            <VidTab text={data[video].title} active={true}/>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )

}

export default VideoView;