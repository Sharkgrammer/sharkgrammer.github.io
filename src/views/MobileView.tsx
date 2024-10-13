import personalData from "../assets/data/personal.json";
import watchData from "../assets/data/watchfaces.json";
import projectData from "../assets/data/projects.json";
import videoData from "../assets/data/videos.json";
import ReactPlayer from "react-player/youtube";


function MobileView() {

    // This site is only a bare bones version of the main site
    // Because of this, it'll only display what it needs to and ignore the rest
    // It'll also access data from the desktop variant in ways it probably shouldn't
    function getWatchArray() {
        return watchData[0].faces.concat(watchData[1].faces, watchData[2].faces);
    }

    return (
        <div className="w-full h-full min-h-screen bg-1-pane-background flex justify-center text-white">
            <div className="w-full md:w-2/3 h-full flex flex-col gap-5 py-5 px-5">

                <div className="w-full flex-col gap-2">


                    <h1 className="text-4xl font-bold text-1-blue py-2">Daniel Keane Kelly</h1>

                    <div className="border-1-text-dim border rounded-2xl py-2 flex flex-col gap-2">

                        <div className="text-3xl text-1-orange px-2">
                            <h2>{personalData[0].data[1].value}</h2>
                            <h2>{personalData[0].data[2].value}</h2>
                            <h2>This the mobile version.</h2>
                        </div>

                        <div className="bg-1-text-dim w-full h-0.5"/>

                        <div className="px-2 text-1-orange">
                            <h4>The desktop site is based off of popular apps.</h4>
                            <h4>Visit with a laptop/desktop to check it out!</h4>
                            <h4>It's based on VSCode, PowerPoint, Excel, Premiere Pro and Gmail.</h4>
                        </div>
                    </div>


                </div>

                <div className="w-full flex-col gap-2">

                    <h1 className="text-4xl font-bold text-1-blue py-2">Created Watch Faces</h1>

                    <div className="grid grid-cols-2 gap-2">
                        {getWatchArray().map((face: any, index: number) => (
                            <div key={index} className="border-1-text-dim border rounded-2xl px-2">
                                <img src={face.img}/>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="w-full flex-col gap-2">

                    <h1 className="text-4xl font-bold text-1-blue py-2">Interesting Projects</h1>

                    <div className="grid grid-cols-1 gap-2">
                        {projectData.map((proj: any, index: number) => (
                            <a key={index} href={proj.repo}
                               className="border-1-text-dim hover:border-white border rounded-2xl overflow-hidden cursor-pointer">

                                <div className="px-2 flex flex-col gap-1 py-2">
                                    <h4 className="text-2xl font-bold">{proj.title}</h4>
                                    <p>{proj.desc}</p>
                                </div>


                                <img src={proj.img}/>

                            </a>
                        ))}
                    </div>

                </div>

                <div className="w-full flex-col gap-2">

                    <h1 className="text-4xl font-bold text-1-blue py-2">Created Videos</h1>

                    <div className="grid grid-cols-1 gap-2">
                        {videoData.map((vid: any, index: number) => (
                            <div key={index} className="border-1-text-dim border rounded-2xl min-h-60 overflow-hidden">
                                <ReactPlayer width="100%" height="100%" pip={false} controls={true}
                                             url={`https://www.youtube.com/watch?v=${vid.id}`}/>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MobileView
