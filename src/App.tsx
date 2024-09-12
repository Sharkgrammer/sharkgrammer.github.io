import './App.css'
import Navbar from "./components/nav/Navbar.tsx";
import Footer from "./components/nav/Footer.tsx";
import TempDisplay from "./components/temp/TempDisplay.tsx";

function App() {

  return (
    <div>

        <Navbar />

        <div className="flex w-full h-[calc(100dvh)] justify-center items-center">

            <div className="text-center">
                <h1 className="text-2xl">Hi</h1>
                <h2>This page is still under construction</h2>
                <h2>But thanks for visiting! See some of my other hosted projects below!</h2>

                <div className="grid grid-cols-2">
                    <TempDisplay />
                    <TempDisplay />
                    <TempDisplay />
                </div>

            </div>


        </div>




        <Footer />

    </div>
  )
}

export default App
