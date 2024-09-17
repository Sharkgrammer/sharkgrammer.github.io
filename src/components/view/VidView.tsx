import Wave from "../util/Wave.tsx";
import Videos from "../../assets/data/videos.json";

function VidView() {

    return (
        <div>
            <Wave top={true}/>
            <div className="flex justify-center bg-cyan">

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 px-2 py-2">

                    {Videos.map((video, index) => (
                        <div className="card overflow-hidden" key={index}>
                            <iframe width="380" height="280" src={video}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default VidView
