import {useEffect, useState} from "react";

import github from "../assets/img/github.svg";

import MailTab from "../components/repo/MailTab.tsx";
import {
    ChevronDownIcon,
    CreditCardIcon, DocumentChartBarIcon, EnvelopeIcon,
    HomeIcon, PaperAirplaneIcon, PencilIcon,
    PresentationChartLineIcon, StarIcon,
    UserIcon,
    WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";
import Mail from "../components/repo/Mail.tsx";
import MailDetails from "../components/repo/MailDetails.tsx";
import MailPill from "../components/repo/MailPill.tsx";

function RepoView({callback}: { callback?: any }) {

    const [data, setData] = useState([]);
    const [repo, setRepo] = useState(0);
    const [showRepo, setShowRepo] = useState(false);

    async function getRepoData() {
        // This works fine for now.
        // Since this is personal and I currently have 30-something public repos, I don't need to code it to paginate
        const response = await fetch("https://api.github.com/users/Sharkgrammer/repos?per_page=100&sort=updated&order=desc");

        if (response.ok) {
            let res = await response.json();

            setData(res);
        }
    }

    useEffect(() => {
        getRepoData();
    }, [])

    function openDetails(r: number) {
        setRepo(r);
        setShowRepo(true);
    }

    function closeDetails() {
        setShowRepo(false);
    }

    function setCallback(val: boolean) {
        callback({b: val, f: false})
    }

    useEffect(() => {
        setCallback(true);
    }, [])

    return (
        <div className="h-full bg-5-background font-semibold flex">


            <div className="h-full w-1/5 flex flex-col text-white py-5 gap-3">

                <div className="flex items-center justify-center">

                    <div className="flex">
                        <img src={github} className="w-16"/>
                        <div className="flex items-center p-2">
                            <span className="text-3xl select-none">Repos</span>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center">
                    <div className="w-fit text-black flex gap-2 border border-black rounded-2xl py-1 px-3
                             bg-white hover:bg-gray-100">
                        <PencilIcon className="size-6"/>
                        <span className="h-6 select-none">Make Repo</span>
                    </div>
                </div>

                <div className="w-full flex flex-col">
                    <MailPill text="Inbox" active={true}>
                        <EnvelopeIcon className="size-6"/>
                    </MailPill>

                    <MailPill text="Starred" active={false}>
                        <StarIcon className="size-6"/>
                    </MailPill>

                    <MailPill text="Important" active={false}>
                        <DocumentChartBarIcon className="size-6"/>
                    </MailPill>

                    <MailPill text="Sent" active={false}>
                        <PaperAirplaneIcon className="size-6"/>
                    </MailPill>

                    <MailPill text="More" active={false}>
                        <ChevronDownIcon className="size-6"/>
                    </MailPill>
                </div>
            </div>

            <div className="h-full w-4/5 flex flex-col">

                <div className="px-2 py-5 h-full">
                    <div className="h-full bg-5-pane-background-light rounded-2xl flex flex-col overflow-y-hidden"
                         onMouseEnter={() => setCallback(false)} onMouseLeave={() => setCallback(true)}>

                        <div className="flex px-2 p-2 gap-2">
                            <MailTab text="Primary" active={true}>
                                <HomeIcon className="size-5"/>
                            </MailTab>
                            <MailTab text="Promitions" active={false}>
                                <CreditCardIcon className="size-5"/>
                            </MailTab>
                            <MailTab text="Social" active={false}>
                                <UserIcon className="size-5"/>
                            </MailTab>
                            <MailTab text="Updates" active={false}>
                                <WrenchScrewdriverIcon className="size-5"/>
                            </MailTab>
                            <MailTab text="Forums" active={false}>
                                <PresentationChartLineIcon className="size-5"/>
                            </MailTab>
                        </div>

                        {data.length > 0 ? (
                            showRepo ? (
                                <div className="h-full w-full">
                                    <MailDetails data={data[repo]} callback={closeDetails}/>
                                </div>
                            ) : (
                                <div className="h-full w-full overflow-y-scroll">

                                    {data.map((repo: any, index: number) => (
                                        <div key={index} onClick={() => openDetails(index)}>
                                            <Mail data={repo}/>
                                        </div>
                                    ))}

                                </div>
                            )
                        ) : (
                            <div className="w-full h-full flex justify-center items-center">
                                <div style={{'borderTopColor': "transparent"}}
                                     className="spinner animate-spin w-16 h-16 border-4 rounded-full"/>
                            </div>
                        )}

                    </div>
                </div>


            </div>

        </div>
    )
}

export default RepoView
