function MailPill({text, active, children}: { text: string, active: boolean, children: any }) {

    return (
        <div className={`w-full rounded-r-full flex items-center select-none gap-2 py-2 px-10 
            ${active && "bg-5-pane-background-light"}`}>
            {children}
            <span>{text}</span>
        </div>
    )
}

export default MailPill
