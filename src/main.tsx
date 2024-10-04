import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorView from "./views/ErrorView.tsx";
import PersonalView from "./views/PersonalView.tsx";
import WatchView from "./views/WatchView.tsx";
import ProjectView from "./views/ProjectView.tsx";
import VideoView from "./views/VideoView.tsx";
import RepoView from "./views/RepoView.tsx";
import ComboView from "./views/ComboView.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorView/>,
        children: [
            {
                path: "",
                element: <ComboView/>,
            },
            {
                path: "personal",
                element: <PersonalView callback={() => {}}/>,
            },
            {
                path: "watch",
                element: <WatchView callback={() => {}}/>,
            },
            {
                path: "project",
                element: <ProjectView callback={() => {}}/>,
            },
            {
                path: "video",
                element: <VideoView callback={() => {}}/>,
            },
            {
                path: "repo",
                element: <RepoView callback={() => {}}/>,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
