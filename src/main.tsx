import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorView from "./views/error/ErrorView.tsx";
import PersonalView from "./views/personal/PersonalView.tsx";
import ProjectView from "./views/project/ProjectView.tsx";
import WatchView from "./views/watch/WatchView.tsx";
import SiteView from "./views/site/SiteView.tsx";
import VideoView from "./views/video/VideoView.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorView/>,
        children: [
            {
                path: "",
                element: <PersonalView/>,
            },
            {
                path: "t1",
                element: <WatchView/>,
            },
            {
                path: "t2",
                element: <ProjectView/>,
            },
            {
                path: "t3",
                element: <SiteView/>,
            },
            {
                path: "t4",
                element: <VideoView/>,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
