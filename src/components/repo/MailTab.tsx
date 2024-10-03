function MailTab({text, active, children}: { text: string, active: boolean, children: any }) {

    return (
        <div className={`pl-5 pr-6 select-none pb-1 
            ${active ? "text-white hover:text-gray-200 border-b border-white cursor-pointer" : "text-gray-400"}`}>

            <div className="flex items-center">
                {children}
                <span className="pl-2 text-base">{text}</span>
            </div>

        </div>
    )
}

export default MailTab
