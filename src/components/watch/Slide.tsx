function Slide({data}: {data:any}) {

    return (
        <div className="p-1 h-full flex flex-col items-center justify-center select-none">

            <div className="text-center h-full flex items-center py-2">
                <h1 className="text-3xl font-bold">{data.title}</h1>
            </div>

            <div className="grid grid-cols-3 px-2 w-full pb-2 gap-5">

                {data.faces.map((face: any, index: number) => (
                    <div className="text-center h-full px-5 flex flex-col gap-2" key={index}>
                        <img src={face.img} className="" alt="Watch Face"/>

                        <h1 className="text-xl font-semibold">{face.title}</h1>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Slide
