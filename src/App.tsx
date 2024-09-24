import './App.css'
import Navbar from "./components/nav/Navbar.tsx";
import Footer from "./components/nav/Footer.tsx";
import WatchView from "./components/view/WatchView.tsx";
import SiteView from "./components/view/SiteView.tsx";
import PersonalView from "./components/view/PersonalView.tsx";
import VidView from "./components/view/VidView.tsx";
import ProjectView from "./components/view/ProjectView.tsx";
import Wave from "./components/util/Wave.tsx";

function App() {

    return (
        <div className="flex w-full h-[calc(100dvh)] justify-center">

            <div className="flex flex-col">
                <Navbar/>

                <Wave top={false}/>
                <PersonalView/>

                <Wave top={true}/>
                <ProjectView/>

                <Wave top={false}/>
                <WatchView/>

                <Wave top={true}/>
                <SiteView/>

                <Wave top={false}/>
                <VidView/>

                <Wave top={true}/>
                <Footer/>
            </div>

        </div>
    )
}

export default App
