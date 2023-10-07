import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import ServiceDeatils from "../Page/ServiceDeatils/ServiceDeatils";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/news/:id',
                element: <ServiceDeatils></ServiceDeatils>,
                loader: () => fetch('/public/service.json')
                
            }
        ]
    }
])
export default routes;