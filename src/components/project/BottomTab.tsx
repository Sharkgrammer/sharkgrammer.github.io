function BottomTab({text, active, runClick}: { text: string, active: boolean, runClick: any }) {

    return (
        <div onClick={runClick} className={`px-4 py-1 select-none cursor-pointer font-semibold border-b-2
        ${active ? "bg-white text-3-primary border-3-primary" : "bg-3-background text-gray-500 border-3-shadow"}`}>

            <span>{text}</span>

        </div>
    )
}

export default BottomTab
