import { createBrowserRouter } from "react-router-dom";
import Ticket from "../Pages/Ticket/Ticket";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Ticket/>,
    },
])