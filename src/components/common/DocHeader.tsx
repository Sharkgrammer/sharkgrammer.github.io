function DocHeader({ title, colour }: { title: string, colour: string }) {

    return (
        <div className={`flex justify-center items-center h-12 py-2 ${colour}`}>
            <h1 className="text-xl text-white whitespace-nowrap select-none">{title}</h1>
        </div>
    )
}

export default DocHeader
