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

                <div className="grid grid-cols-2 p-2 gap-2">

                    <TempDisplay title="Quantum Poem" url="https://sharkgrammer.github.io/Quantum-Poem/" desc="A simple tribute to Outer Wilds in react. The poem changes when you refresh or click the page." />
                    <TempDisplay title="Samaritan" url="https://sharkgrammer.github.io/Samaritan/" desc="A Person of Interest Samaritan inspired ChatGPT web interface" />
                    <TempDisplay title="Stacker" url="https://sharkgrammer.github.io/Stacker/" desc="Just like the arcade machine. Except in Vue.js with some added settings and (hopefully) pizzazz" />
                    <TempDisplay title="GitHub Stats" url="https://sharkgrammer.github.io/Lightweight-GitHub-Stats" desc="My verson of the test site my GitHub stats module creates" />
                </div>

                <div className="pt-2">
                    <h2 className="text-lg">Also, my stats thing is pretty neat</h2>
                    <img className="p-1" src="https://sharkgrammer.github.io/Lightweight-GitHub-Stats/data.png" />
                </div>

            </div>


        </div>

        <Footer />

    </div>
  )
}

export default App
