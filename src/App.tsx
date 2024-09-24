import './App.css'
import Navbar from "./components/nav/Navbar.tsx";
import Footer from "./components/nav/Footer.tsx";
import WatchView from "./components/view/WatchView.tsx";
import SiteView from "./components/view/SiteView.tsx";
import PersonalView from "./components/view/PersonalView.tsx";
import VidView from "./components/view/VidView.tsx";
import ProjectView from "./components/view/ProjectView.tsx";

function App() {

    return (
        <div className="flex w-full h-[calc(100dvh)] justify-center">

            <div className="flex flex-col">
                <Navbar/>

                <PersonalView/>

                <WatchView/>

                <ProjectView/>

                <SiteView/>

                <VidView/>

                <Footer/>
            </div>

        </div>
    )
}

export default App
