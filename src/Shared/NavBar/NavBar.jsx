import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FaRegUser } from "react-icons/fa";

const NavBar = () => {
  const navLinks = (
    <>
      <li className="text-gray-100 font-medium">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-gray-100 font-medium">
        <NavLink to="/assignment">Assignments</NavLink>
      </li>
    </>
  );
  return (
    <nav className="bg-violet-950 border-b-4 border-violet-500 bg-dot">
      <div className="navbar md:w-11/12 mx-auto md:py-3 lg:py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-2 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
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
              className="dropdown-content mt-3 z-[10] p-2 py-3 shadow bg-violet-900 w-52 "
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex items-center justify-center gap-1 md:gap-2 flex-1">
            <img
              className="w-10 lg:w-14"
              src="/src/assets/pagelogo.png"
              alt="logo"
            />
            <p className="md:text-2xl lg:text-3xl font-semibold text-white flex-1">
              Genius Gala
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center justify-center lg:gap-10 px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-sm md:btn-md bg-transparent hover:bg-white rounded-md border-2 border-violet-800 text-white lg:text-lg hover:text-violet-950">
            {" "}
            <FaRegUser />
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
