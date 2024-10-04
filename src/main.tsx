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
                element: <PersonalView/>,
            },
            {
                path: "watch",
                element: <WatchView/>,
            },
            {
                path: "project",
                element: <ProjectView/>,
            },
            {
                path: "video",
                element: <VideoView/>,
            },
            {
                path: "repo",
                element: <RepoView/>,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
