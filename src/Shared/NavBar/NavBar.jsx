import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { FaRegUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li className="text-gray-100 font-medium">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-gray-100 font-medium">
        <NavLink to="/assignment">Assignments</NavLink>
      </li>
      {
        user&&
        <li className="text-gray-100 font-medium">
        <NavLink to="">Create Assignment</NavLink>
      </li>
      }
      {
        user &&
        <li className="text-gray-100 font-medium">
        <NavLink to="">Pending Assignment</NavLink>
      </li>
      }
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
              className="dropdown-content mt-3 z-[10] p-2 py-3 shadow backdrop-blur-md border border-violet-700 rounded-md w-52 "
            >
              {navLinks}
            </ul>
          </div>
          <Link to='/' className="flex items-center justify-center gap-1 md:gap-2 flex-1">
            <img
              className="w-10 lg:w-14"
              src="/src/assets/pagelogo.png"
              alt="logo"
            />
            <p className="md:text-2xl lg:text-3xl font-semibold text-white flex-1">
              Genius Gala
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center justify-center lg:gap-10 px-1">
            {navLinks}
          </ul>
        </div>
        {loading ? (
          <div className="navbar-end">
            <span className="loading loading-ring loading-lg text-violet-500"></span>
          </div>
        ) : (
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div
                    title={user?.displayName}
                    className="w-16 ring rounded-full"
                  >
                    <img
                      referrerPolicy="no-referrer"
                      alt="User Profile Photo"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-1 z-[10] p-2 shadow backdrop-blur-md rounded-md border border-violet-700 w-56"
                >
                  <li>
                    <Link className="justify-between text-xs font-semibold text-gray-100">
                      My Attempted Assignments
                    </Link>
                  </li>

                  <li className="mt-2">
                    <button
                      onClick={logOut}
                      className="bg-violet-600 text-center font-bold"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to="/signin"
                className="btn btn-sm md:btn-md bg-transparent hover:bg-white rounded-md border-2 border-violet-800 text-white lg:text-lg hover:text-violet-950"
              >
                {" "}
                <FaRegUser />
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
