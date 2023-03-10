import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const menuItems = <>
    <li><NavLink to="/home" className={({ isActive }) => isActive ? "bg-[#3A4256] text-white rounded-md" : undefined}>Home</NavLink></li>
    <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "bg-[#3A4256] text-white rounded-md" : undefined}>Dashboard</NavLink></li>

   
</>
    return (
        <div className="navbar bg-base-100 px-12 py-8 dark:bg-gray-800 dark:text-gray-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-800 dark:text-gray-100">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex'> 
                    <Link to="/home" className="btn btn-ghost normal-case text-3xl">E-Courier  </Link>
                    
                </div>
            </div>
            <div className="navbar-end  hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}

                </ul>
            </div>

        </div>
    );
};

export default Header;