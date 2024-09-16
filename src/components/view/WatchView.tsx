import Watches from "../../assets/data/watchfaces.json";
import WatchDisplay from "../watch/WatchDisplay.tsx";
import Wave from "../util/Wave.tsx";

function WatchView() {

    return (
        <div>
            <Wave top={true}/>

            <div className="py-4 sm:py-2 px-2 bg-cyan">
                <div className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
                    {Watches.map((face, index) => (
                        <div key={index}>
                            <WatchDisplay title={face.title} ratings={face.ratings} img={face.img} url={face.url}
                                          giturl={face.giturl} gitstars={face.gitstars}/>
                        </div>
                    ))}
                </div>

            </div>

            <Wave top={false}/>

        </div>
    )

}

export default WatchView