import {ArchiveBoxIcon, ChatBubbleBottomCenterTextIcon, StarIcon, TrashIcon} from "@heroicons/react/24/outline";

function Mail({data}: { data: any }) {

    function formatDate(date: string) {
        const d = new Date(date);

        const day: string = String(d.getDate()).padStart(2, '0');
        const month: string = String(d.getMonth() + 1).padStart(2, '0');
        const year: string = String(d.getFullYear()).slice(-2);

        return `${day}/${month}/${year}`;
    }

    return (
        <div className="w-full text-5-text-light bg-5-pane-background cursor-pointer select-none">

            <div className="px-2 w-full flex items-center py-1 border-y border-5-shadow gap-3">

                <div className="mail-icon border-5-text-light hover:border-white border-2 rounded p-0.5"/>

                <StarIcon className="mail-icon"/>

                <ChatBubbleBottomCenterTextIcon className="mail-icon"/>

                <span className="whitespace-nowrap first-letter:capitalize">{data.name.replaceAll("-", " ")}</span>
                <span> - </span>
                <span className="text-gray-500 whitespace-nowrap truncate text-ellipsis">{data.description}</span>

                <div className="flex-1"/>

                <div className="h-full">
                    <span className="w-20 text-gray-500">{formatDate(data.updated_at)}</span>
                </div>

                <ArchiveBoxIcon className="mail-icon"/>
                <TrashIcon className="mail-icon"/>
            </div>


        </div>
    )
}

export default Mail
