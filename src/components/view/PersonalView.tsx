function PersonalView() {

    function openGitHub() {
        window.open("https://github.com/Sharkgrammer");
    }

    function openYoutube() {
        window.open("https://www.youtube.com/@danielkeanekelly");
    }

    function openKofi() {
        window.open("https://ko-fi.com/danielkeanekelly");
    }

    function openLinkedin() {
        window.open("https://www.linkedin.com/in/daniel-keane-kelly/");
    }

    return (
        <div className="py-5">
            <div className="flex justify-center">

                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex justify-center items-center">
                        <div className="rounded-full h-40 w-40 sm:h-52 sm:w-52 overflow-hidden">
                            <img src="/img/other/dan.png"/>
                        </div>
                    </div>

                    <div className="w-full h-full flex flex-col justify-center items-center pt-2">
                        <h1 className="text-3xl font-bold">Daniel Keane Kelly</h1>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            <div className="icon-center" onClick={openGitHub}>
                                <img src="/img/logo/github.png" className="h-10"/>
                            </div>
                            <div className="icon-center" onClick={openLinkedin}>
                                <img src="/img/logo/li.png" className="h-9"/>
                            </div>
                            <div className="icon-center" onClick={openKofi}>
                                <img src="/img/logo/kofi.png" className="h-9"/>
                            </div>
                            <div className="icon-center" onClick={openYoutube}>
                                <img src="/img/logo/youtube.png" className="h-8"/>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )

}

export default PersonalView