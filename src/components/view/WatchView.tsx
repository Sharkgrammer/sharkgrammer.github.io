import Watches from "../../assets/data/watchfaces.json";
import WatchDisplay from "../watch/WatchDisplay.tsx";
import Wave from "../../assets/img/wave-top.svg";

function WatchView() {

    return (

        <div>
            <img src={Wave} className="w-full"/>


            <div className="p-2 bg-teal-100">


                <div className="">
                </div>

                <div>
                    <h1 className="text-3xl font-bold">Watch Faces</h1>
                    <h2 className="text-2xl font-bold">These faces are both Fitbit or Watchy</h2>
                    <p>Waffle here about fitbit and how the links dont work and yadda yadda</p>
                </div>

                <div className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
                    {Watches.map((face, index) => (
                        <div key={index}>
                            <WatchDisplay title={face.title} ratings={face.ratings} img={face.img} url={face.url}
                                          giturl={face.giturl} gitstars={face.gitstars}/>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )

}

export default WatchView