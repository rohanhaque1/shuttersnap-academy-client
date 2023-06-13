import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import logoImg from "../../../assets/logo.png";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const { user, signOutUser } = useContext(AuthContext);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-yellow-400 tracking-wide transition-colors duration-200"
              : isPending
              ? "pending"
              : "hover:text-teal-400"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-yellow-400 tracking-wide transition-colors duration-200"
              : isPending
              ? "pending"
              : "hover:text-teal-400"
          }
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-yellow-400 tracking-wide transition-colors duration-200"
              : isPending
              ? "pending"
              : "hover:text-teal-400"
          }
        >
          Classes
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isActive
                ? "text-yellow-400 tracking-wide transition-colors duration-200"
                : isPending
                ? "pending"
                : "hover:text-teal-400"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  const handleLogout = () => {
    signOutUser()
      .then(() => toast.success("Log out Successful.. !!"))
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="bg-teal-800 w-full z-10 shadow-lg">
      <Container>
        <div className="py-2">
          <div className="relative flex items-center justify-between">
            <div className="hidden md:block">
              <Link to="/" className="flex items-center gap-2">
                <img src={logoImg} className="w-10 h-10" alt="logo" />
                <div>
                  <span className="text-xl font-bold tracking-wide text-gray-100 uppercase">
                    ShutterSnap Academy
                  </span>
                  <p className="text-yellow-400 text-md font-semibold">
                    "---- Capture Your Vision ----"
                  </p>
                </div>
              </Link>
            </div>
            <ul className=" items-center hidden space-x-8 md:flex text-white font-medium">
              {navOptions}
            </ul>

            <div onClick={handleTheme}>
              {theme === "dark" ? (
                <BsFillSunFill
                  size={24}
                  className="text-yellow-500"
                  title="Light Mode"
                />
              ) : (
                <BsMoonStarsFill
                  size={22}
                  className="text-white"
                  title="Dark Mode"
                />
              )}
            </div>

            <div className="flex items-center gap-3">
              {user ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="btn bg-pink-800 hover:bg-black border-0 text-white font-semibold px-3 py-2 rounded-lg shadow-lg"
                  >
                    Log out
                  </button>
                  <img
                    className="object-cover w-12 h-12 mb-2 rounded-full shadow"
                    src={user?.photoURL}
                    alt="Person"
                  />
                </>
              ) : (
                <Link to="/login">
                  <button className="btn bg-pink-800 hover:bg-black border-0 text-white font-semibold px-3 py-2 rounded-lg shadow-lg">
                    Login
                  </button>
                </Link>
              )}
            </div>

            <div className="md:hidden z-10">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-8 font-bold text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-white border rounded-lg shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link to="/" className="flex items-center gap-2">
                          <img src={logoImg} className="w-10 h-10" alt="logo" />
                          <div>
                            <span className="text-xl font-bold tracking-wide text-teal-600 uppercase">
                              ShutterSnap Academy
                            </span>
                            <p className="text-pink-700 text-md font-semibold">
                              "---- Capture Your Vision ----"
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-8 font-bold text-black"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4 text-white p-5 rounded-lg shadow-xl bg-slate-500">
                        {navOptions}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
