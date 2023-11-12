import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks =<>
        <NavLink to={"/"}><li className="mr-3">Home</li></NavLink>
        <NavLink to={"/login"}><li>Login</li></NavLink>
    </>
    return (
        <div className="navbar bg-black text-white fixed z-10 bg-opacity-25 max-w-[580px] md:max-w-3xl lg:max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl block">Port City <span className="text-sm block -mt-1 text-start">Restaurant</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;