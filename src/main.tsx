import React from "react";
import ReactDOM from "react-dom/client";
import appRouter from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import NotificationWrapper from "./notify";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <NotificationWrapper>
            <RouterProvider router={appRouter} />
        </NotificationWrapper>
    </React.StrictMode>
);
