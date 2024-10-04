import {useRouteError} from "react-router-dom";
import JSONFormat from "../components/personal/JSONFormat.tsx";

function ErrorView() {
    const error: any = useRouteError();

    function getData(){

        return  [
            {
                "row": "col1",
                "bracket": true
            },
            {
                "title": "error",
                "value": `${error.status}`,
                "row": "col2",
                "colon": true,
                "comma": true
            },
            {
                "title": "message",
                "value": `${error.statusText}`,
                "row": "col2",
                "colon": true,
                "comma": true
            },
            {
                "title": "data",
                "value": `${error.data}`,
                "row": "col2",
                "colon": true
            },
            {
                "row": "col1",
                "bracketBack": true
            }
        ];
    }


    return (
        <div className="text-white min-h-screen h-full bg-1-pane-background">
            <div className="flex-1 flex flex-col items-start lg:text-2xl w-full select-none">
                <JSONFormat data={getData()}/>
            </div>
        </div>
    )
}

export default ErrorView
