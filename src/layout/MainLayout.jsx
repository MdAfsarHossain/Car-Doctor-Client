import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet />
            
            {/* <Home></Home> */}
            {/* <Outlet /> */}
        </div>
    );
};

export default MainLayout;