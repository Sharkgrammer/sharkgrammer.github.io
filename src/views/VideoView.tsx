import {useState, useRef, useEffect} from "react";

import data from "../assets/data/videos.json";

import ReactPlayer from 'react-player/youtube';
import VidPreview from "../components/video/VidPreview.tsx";
import VidTab from "../components/video/VidTab.tsx";

import {
    ArrowPathIcon,
    ArrowUturnLeftIcon,
    ArrowUturnRightIcon,
    BackwardIcon,
    ForwardIcon, NoSymbolIcon,
    PauseIcon,
    PlayIcon, SpeakerWaveIcon, SpeakerXMarkIcon
} from "@heroicons/react/24/solid";
import SmallTimeline from "../components/video/SmallTimeline.tsx";
import BigTimeline from "../components/video/BigTimeline.tsx";

function VideoView({callback}: { callback?: any }) {

    const player: any = useRef(null);

    // Player states
    const [duration, setDuration] = useState(0);
    const [secondsProgressed, setSeconds] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [looping, setLooping] = useState(false);

    // Other states
    const [video, setVideo] = useState(0);

    const url = "https://www.youtube.com/watch?v=";

    function changeVid(val: number) {
        setVideo(val);
        setPlaying(false);
        setSeconds(0);
    }

    function handleDuration(d: number) {
        setDuration(d);
    }

    function handleProgress(p: any) {
        setSeconds(p.playedSeconds);
    }

    function handlePlaying(p: boolean) {
        setPlaying(p);
    }

    function handleMuted(m: boolean) {
        setMuted(m);
    }

    function handleLooping(l: boolean) {
        setLooping(l);
    }

    function skipForward() {
        if (player.current) {
            let s = secondsProgressed + 5 < duration ? secondsProgressed + 5 : duration;

            player.current.seekTo(s);
            setSeconds(s);
        }
    }

    function skipBackward() {
        if (player.current) {
            let s = secondsProgressed > 5 ? secondsProgressed - 5 : 0;

            player.current.seekTo(s)
            setSeconds(s);
        }
    }

    function timelineCallback(secs: number) {
        if (player.current) {
            player.current.seekTo(secs);
            setSeconds(secs)
        }
    }

    function convertTime(seconds: number) {
        const h: number = Math.floor(seconds / 3600);
        const m: number = Math.floor((seconds % 3600) / 60);
        const s: number = Math.floor(seconds % 60);

        return `${String(h).padStart(2, '0')};${String(m).padStart(2, '0')};${String(s).padStart(2, '0')}`;
    }

    useEffect(() => {
        callback({b: true, f: true})
    }, [])

    return (
        <div className="w-full h-full font-semibold flex bg-4-background">

            <div className="w-3/5 h-full flex flex-col vid-border">

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

                <div className="h-fit flex flex-col vid-border">

                    <div className="p-2">
                        <div className="flex gap-2">
                            <VidTab text={`Program: ${data[video].title}`} active={true}/>
                            <VidTab text="Source: (no clips)" active={false}/>
                        </div>
                    </div>

                    {/* Video player */}
                    <div className="w-full h-full flex justify-center">
                        <ReactPlayer width="500px" height="280px" url={url + data[video].id} ref={player}
                                     onDuration={handleDuration} onProgress={handleProgress}
                                     onPause={() => handlePlaying(false)} onPlay={() => handlePlaying(true)}
                                     playing={playing} volume={1} muted={muted} loop={looping} pip={false}/>

                    </div>

                    {/* Video info */}
                    <div className="w-full flex px-5">
                        <p className="text-4-blue">{convertTime(secondsProgressed)}</p>

                        <div className="flex-1"/>

                        <p className="text-4-text-dim">{convertTime(duration)}</p>
                    </div>

                    {/* Video timeline small */}
                    <div className="w-full flex">

                        <SmallTimeline duration={duration} seconds={secondsProgressed} callback={timelineCallback}/>

                    </div>

                    {/* Video controls */}
                    <div className="w-full flex justify-center items-center py-2">

                        <div className="flex gap-2">

                            <div onClick={() => handleMuted(!muted)} className="vid-button">
                                {muted ? (
                                    <SpeakerXMarkIcon/>
                                ) : (
                                    <SpeakerWaveIcon/>
                                )}
                            </div>

                            <ArrowUturnLeftIcon className="vid-button"/>
                            <BackwardIcon className="vid-button" onClick={skipBackward}/>

                            <div onClick={() => handlePlaying(!playing)} className="vid-button">
                                {playing ? (
                                    <PauseIcon/>
                                ) : (
                                    <PlayIcon/>
                                )}
                            </div>

                            <ForwardIcon className="vid-button" onClick={skipForward}/>
                            <ArrowUturnRightIcon className="vid-button"/>

                            <div onClick={() => handleLooping(!looping)} className="vid-button">
                                {looping ? (
                                    <ArrowPathIcon/>
                                ) : (
                                    <NoSymbolIcon/>
                                )}
                            </div>

                        </div>
                    </div>
                </div>

                <div
                    className="h-full flex-1 flex flex-col vid-border">

                    <div className="p-2">
                        <div className="flex gap-2">
                            <VidTab text={data[video].title} active={true}/>
                        </div>
                    </div>

                    <div className="w-full h-full">
                        <BigTimeline duration={duration} seconds={secondsProgressed} title={data[video].title}
                                     muted={muted} callback={timelineCallback} timeFormat={convertTime}/>
                    </div>

                </div>
            </div>


        </div>
    )

}

export default VideoView;