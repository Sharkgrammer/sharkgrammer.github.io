import {
    ArrowLeftCircleIcon,
    ArrowTopRightOnSquareIcon, CursorArrowRaysIcon, EllipsisVerticalIcon,
    FaceSmileIcon,
    PrinterIcon,
    StarIcon
} from "@heroicons/react/24/outline";
import profile from "../../assets/img/me.png";
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";

function MailDetails({data, callback}: { data: any, callback: any }) {

    function formatDate(date: string, justDate:boolean) {
        const d = new Date(date);

        const day: string = String(d.getDate()).padStart(2, '0');
        const month: string = String(d.getMonth() + 1).padStart(2, '0');
        const year: string = String(d.getFullYear()).slice(-2);

        if (justDate){
            return `${day}/${month}/${year}`;
        }

        const hours: string = String(d.getHours()).padStart(2, '0');
        const minutes: string = String(d.getMinutes()).padStart(2, '0');
        const seconds: string = String(d.getSeconds()).padStart(2, '0');


        return `${hours}:${minutes}:${seconds}, ${day}/${month}/${year}`;
    }

    function openGitHub() {
        window.open(data.html_url);
    }

    return (
        <div className="w-full h-full text-black bg-white flex flex-col gap-2 py-5">

            <div className="flex">
                <div className="flex px-5 items-center gap-5">

                    <div className="w-12 h-12 flex items-center justify-center">
                        <ArrowLeftCircleIcon className="cursor-pointer hover:text-gray-700 h-10 w-10"
                                             onClick={callback}/>
                    </div>

                    <span className="text-2xl font-bold">{data.name.replaceAll("-", " ")}</span>
                </div>

                <div className="flex-1"/>

                <div className="flex px-5 items-center gap-3">
                    <PrinterIcon className="mail-icon-dark"/>
                    <ArrowTopRightOnSquareIcon className="mail-icon-dark"/>
                </div>

            </div>

            <div className="flex">

                <div className="flex px-5 items-center gap-5">
                    <img src={profile} className="w-12 h-12 rounded-full"/>

                    <div className="">
                        <p><span className={"font-bold"}>Daniel Keane Kelly</span> <span
                            className="text-gray-500 text-sm">&lt;danielkeanekelly@gmail.com&gt;</span></p>
                        <p className="text-gray-500 text-sm">to me</p>
                    </div>
                </div>

                <div className="flex-1"/>

                <div className="flex px-5 items-center gap-3">

                    <span className="text-gray-500">{formatDate(data.updated_at, false)}</span>

                    <StarIcon className="mail-icon-dark"/>
                    <FaceSmileIcon className="mail-icon-dark"/>
                    <ArrowUturnLeftIcon className="mail-icon-dark"/>
                    <EllipsisVerticalIcon className="mail-icon-dark"/>
                </div>

            </div>


            <div className="pl-[88px]">

                <div className="w-full flex flex-col gap-1">
                    <span>{data.description}</span>
                    <span>The repo is programmed in {data.language}</span>

                    {data.stargazers_count > 0 && (
                        <span>It has {data.stargazers_count} stars</span>
                    )}

                    <span>Date updated: {formatDate(data.updated_at, true)}</span>
                    <span>Date created: {formatDate(data.created_at, true)}</span>


                    <div className="pt-4">
                        <div className="w-fit flex gap-2 border border-black rounded-2xl py-1 px-3
                             hover:bg-gray-100 cursor-pointer" onClick={openGitHub}>
                            <CursorArrowRaysIcon className="size-6"/>
                            <span className="h-6 select-none">Visit Repo</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default MailDetails
