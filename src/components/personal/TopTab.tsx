function TopTab({text, active, runClick}: { text: string, active: boolean, runClick:any }) {

    return (
        <div onClick={runClick} className={`px-2 py-1 select-none cursor-pointer 
        ${active ? "bg-1-pane-background text-white" : "bg-1-pane-background-light text-gray-400"}`}>

            <div>
                <span className="text-base">{text}</span>
                <span className="px-2 font-bold text-sm">X</span>
            </div>

        </div>
    )
}

export default TopTab
