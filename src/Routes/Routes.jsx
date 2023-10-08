import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import ServiceDeatils from "../Page/ServiceDeatils/ServiceDeatils";
import PriviteRoutes from "./PriviteRoutes";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/news/:id',
                element: <PriviteRoutes>
                    <ServiceDeatils></ServiceDeatils>
                </PriviteRoutes>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Register',
                element: <Register></Register>

            }
        ]
    }
])
export default routes;