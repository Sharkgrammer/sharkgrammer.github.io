interface tempProps {
    title: string;
    url: string;
    desc: string;
}

function TempDisplay({title, url, desc}: tempProps) {

    function openPage(){
        window.open(url);
    }

    return (
        <div className="px-2 py-4 border rounded-2xl shadow cursor-pointer bg-gray-50 border-gray-300 hover:bg-red-50 hover:border-red-200" onClick={openPage}>

            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

            <div className="flex justify-center w-full">
                <p className="px-2 w-52">{desc}</p>
            </div>
        </div>
    )
}

export default TempDisplay