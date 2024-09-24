import Wave from "../util/Wave.tsx";

function ProjectView() {

    return (
        <div className="bg-white">

            <div className="flex justify-center w-full px-2 text-center md:text-left py-5">

                <div className="md:w-2/3 flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold">Personal GitHub Stats</h1>

                    <div className="text-left">
                        <p>I wrote a lightweight GitHub stats script for displaying information about my account.</p>
                        <p>It just uses Python and GitHub actions to run and keep the below image up to date with my
                            actions on GitHub.</p>
                    </div>

                    <img className="" src="https://sharkgrammer.github.io/Lightweight-GitHub-Stats/data.png"/>
                </div>
            </div>

            <Wave  top={true}/>

        </div>
    )

}

export default ProjectView