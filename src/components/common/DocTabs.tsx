function DocTabs({colour, border, text}: { colour: string, border: string, text: string }) {

    let items: string[] = ["File", "Home", "Insert", "Draw", "Design", "Transitions", "Animations", "Slide Show",
        "Record", "Review", "View", "Help"];

    return (
        <div
            className={`flex items-center text-lg h-10 gap-3 px-3 py-2 border-b-2 ${colour} ${border} ${text}`}>
            {items.map((item, index) => (
                <span className="whitespace-nowrap select-none" key={index}>{item}</span>
            ))}
        </div>
    )
}

export default DocTabs
