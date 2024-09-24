import Watches from "../../assets/data/watchfaces.json";
import WatchDisplay from "../watch/WatchDisplay.tsx";

function WatchView() {

    return (
        <div>

            <div className="py-4 sm:py-2 px-2 bg-white">
                <div className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
                    {Watches.map((face, index) => (
                        <div key={index}>
                            <WatchDisplay title={face.title} ratings={face.ratings} img={face.img} url={face.url}
                                          giturl={face.giturl} gitstars={face.gitstars}/>
                        </div>
                    ))}
                </div>

                <div className="w-full flex justify-end py-1 text-white">
                    <p>*because Fitbit has removed third-party watch faces in the EU, the links to the watch faces above no longer function within the EU.</p>
                </div>

            </div>

        </div>
    )

}

export default WatchView