import burger from "../../assets/img/icons/burger.svg";

function VidTab({text, active}: { text: string, active: boolean }) {

    return (
        <div className={`px-2 py-1 select-none font-normal 
        ${active ? "text-gray-200 border-b-2 border-white" : "text-4-text-dim"}`}>

            <div className="flex items-center h-full">
                <span className="text-sm">{text}</span>
                {active && (
                    <img src={burger} className="pl-1 pt-0.5 w-4"/>
                )}
            </div>

        </div>
    )
}

export default VidTab
