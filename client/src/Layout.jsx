import Navbar from './Components/Navbar';
import { Outlet } from "react-router-dom";


function Layout() {
    return (
        <div className='w-full h-full bg-zinc-300 space-y-4 p-1'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout;