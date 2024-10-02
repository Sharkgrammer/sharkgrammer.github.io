function TopCell({char}: { char: string }) {

    return (
        <div className="cell border-b-2 border-3-shadow-dark select-none">
            <div className="h-full w-full flex justify-center items-center border-x border-3-shadow-dark">
                <span className="text-3-text-dim">{char}</span>
            </div>
        </div>
    )
}

export default TopCell
