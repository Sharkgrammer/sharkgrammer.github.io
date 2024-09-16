import './App.css'
import Navbar from "./components/nav/Navbar.tsx";
import Footer from "./components/nav/Footer.tsx";
import WatchView from "./components/view/WatchView.tsx";
import SiteView from "./components/view/SiteView.tsx";
import PersonalView from "./components/view/PersonalView.tsx";

function App() {

    return (
        <div className="flex w-full h-[calc(100dvh)] justify-center">

            <div className="flex flex-col">
                <Navbar/>

                <PersonalView/>

                <WatchView/>

                <SiteView/>

                <Footer/>
            </div>

        </div>
    )
}

export default App
