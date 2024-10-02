function NumCell({num}: { num: number }) {

    return (
        <div className="numcell border-r-2 border-3-shadow-dark select-none">
            <div className="w-full h-full flex justify-center items-center border-y border-3-shadow-dark">
                <span className="text-3-text-dim">{num}</span>
            </div>
        </div>

    )
}

export default NumCell
