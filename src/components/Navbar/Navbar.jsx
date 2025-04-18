// import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  // const { user, logoutUser } = useContext(AuthContext);
  const { user, logoutUser } = useAuth();

  const handleLogout = () => {
    // console.log("Lougout successfully");
    logoutUser()
      .then((result) => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.error("Failed to log out: ", error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <NavLink to="/myBookings">My Bookings</NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>Log out</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="px-10">
      <div className="navbar bg-base-100">
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
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link className="">
            <img className="w-20" src="/logo.svg" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex flex-row gap-5">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Apointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
