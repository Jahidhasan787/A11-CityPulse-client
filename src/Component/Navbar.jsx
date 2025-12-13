import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links =<><NavLink to="/"><li className="pl-5 text-lg ">Home</li></NavLink>
            <NavLink to={"/issues"}><li className="pl-5 text-lg ">All Issues</li></NavLink>
            <NavLink to={"/stuffs"}><li className="pl-5 text-lg ">All Stuff</li></NavLink>
            <NavLink to={"/contact"}><li className="pl-5 text-lg ">Contact </li></NavLink>
  </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm lg:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
            {links}
            </ul>
          </div>
          <Link to="/">
            <p className="font-bold text-2xl text-blue-700">
              City<span className="text-red-500">Pulse</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"login"}><p className="btn mr-2">Log In</p></Link>
          <Link to={"register"}><p className="btn">Sign Up</p></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
