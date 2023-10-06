import { Outlet } from "react-router-dom";

 
 const Root = () => {
    return (
        <div className=" max-w-5xl mx-auto">
            <Outlet></Outlet>
        </div>
    );
 };
 
 export default Root;