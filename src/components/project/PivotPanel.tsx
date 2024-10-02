interface cell {
    h: number;
    w: number
    l: number,
    t: number
}

function PivotPanel({data, children}: { data: cell, children: any }) {

    return (
        <div className="[grid-area:stack] w-auto h-full select-none" style={{
            marginLeft: (data.l * 80) + 40,
            marginTop: (data.t * 32) + 32,
            width: (data.w * 80),
            height: (data.h * 32)
        }}>
            <div className="bg-white border-black border h-full w-full">
                {children}
            </div>
        </div>
    )
}

export default PivotPanel
