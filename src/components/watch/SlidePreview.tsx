function SlidePreview({data, active, number}: { data: any, active: boolean, number: number }) {


    return (
        <div className="w-full flex min-w-52 select-none">
            <span
                className={`text-2-primary text-3xl font-bold pr-1 ${active ? "text-2-primary" : "text-gray-700"}`}>{number}</span>

            <div
                className={`bg-white w-full h-full py-3 flex justify-center items-center ${active ? "active-border" : "shaded-border"}`}>

                <div className="grid grid-cols-3 w-full h-full justify-center items-center">
                    {data.faces.map((face: any, index: number) => (
                        <div className="flex justify-center items-center w-full" key={index} >
                            <img src={face.img} className="p-2 h-full max-h-32" alt="Watch Face"/>
                        </div>
                    ))}
                </div>


            </div>

        </div>
    )
}

export default SlidePreview
