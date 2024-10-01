function TopTab({text, active, runClick, lang}: { text: string, active: boolean, runClick: any, lang: string }) {

    // TODO add more prefixes when more languages are added
    function getPrefix() {
        switch (lang) {
            case "JSON":
                return "{ }";
            default:
                return "";
        }
    }

    return (
        <div onClick={runClick} className={`px-2 py-1 select-none cursor-pointer 
        ${active ? "bg-1-pane-background text-white" : "bg-1-pane-background-light text-gray-400"}`}>

            <div>
                <span className="px-1 font-bold text-1-yellow">{getPrefix()}</span>
                <span className="text-base">{text}</span>
                <span className="px-2 font-bold text-sm">X</span>
            </div>

        </div>
    )
}

export default TopTab
