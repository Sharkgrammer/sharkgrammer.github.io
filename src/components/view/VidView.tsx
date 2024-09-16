import Wave from "../util/Wave.tsx";

function VidView() {

    return (
        <div>
            <Wave top={true}/>
            <div className="flex justify-center bg-cyan">

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 px-2 py-2">

                    <div className="card overflow-hidden">
                        <iframe width="380" height="280" src="https://www.youtube.com/embed/XeEITqNPDFY?si=LAt9RSVBpX-S5Rqr"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className="card overflow-hidden">
                        <iframe width="380" height="280" src="https://www.youtube.com/embed/Qxiqgw56k1o?si=lH8p9R5QldGC87YN"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className="card overflow-hidden">
                        <iframe width="380" height="280"
                                src="https://www.youtube.com/embed/r7RtaeCx-7o?si=b09dnhym4MWfIgks"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className="card overflow-hidden">
                        <iframe width="380" height="280"
                                src="https://www.youtube.com/embed/eJxtoCWF4Sg?si=o4b4KcgJeUNxxDWW"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default VidView
