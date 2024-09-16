import './App.css'
import Navbar from "./components/nav/Navbar.tsx";
import Footer from "./components/nav/Footer.tsx";
import Sites from "./assets/data/sites.json";
import Watches from "./assets/data/watchfaces.json";
import SiteDisplay from "./components/site/SiteDisplay.tsx";
import WatchDisplay from "./components/watch/WatchDisplay.tsx";

function App() {

    console.log(Watches);

    return (
        <div>

            <Navbar/>

            <div className="flex w-full h-[calc(100dvh)] justify-center px-2">

                <div className="py-1">
                    <div className="grid gap-2 rid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                        {Watches.map((face, index) => (
                            <div key={index}>
                                <WatchDisplay title={face.title} ratings={face.ratings} img={face.img} url={face.url}
                                              giturl={face.giturl} gitstars={face.gitstars}/>
                            </div>
                        ))}
                    </div>

                    <div className="h-10">

                    </div>

                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                        {Sites.map((site, index) => (
                            <div key={index}>
                                <SiteDisplay title={site.title} url={site.url} desc={site.desc} img={site.img}/>
                            </div>
                        ))}
                    </div>


                </div>


            </div>

            <Footer/>

        </div>
    )
}

export default App
