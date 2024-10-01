function Slide(props: any) {

    return (
        <div className="p-1 h-full flex flex-col items-center justify-center select-none">

            <div className="text-center h-full flex items-center py-2">
                <h1 className="text-3xl font-bold">{props.data.title}</h1>
            </div>

            <div className="grid grid-cols-3 px-2 w-full pb-2">

                {props.data.faces.map((face: any, index: number) => (
                    <div className="text-center h-full " key={index}>
                        <img src={face.img} className="px-5" alt="Watch Face"/>

                        <h1 className="text-xl font-semibold">{face.title}</h1>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Slide
