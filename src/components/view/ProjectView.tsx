function ProjectView() {

    function openGitHub(){
        window.open("https://github.com/Sharkgrammer/Lightweight-GitHub-Stats");
    }

    return (
        <div className="text-white">

            <div className="flex justify-center w-full px-2 text-center md:text-left py-5">

                <div className="md:w-2/3 w-full cursor-pointer" onClick={openGitHub}>
                    <img className="w-full" src="https://sharkgrammer.github.io/Lightweight-GitHub-Stats/data.png"/>
                </div>
            </div>

        </div>
    )

}

export default ProjectView