import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BiSelectMultiple } from "react-icons/bi";
import { AiOutlineDollar } from "react-icons/ai";
import { BsWalletFill, BsPersonVideo } from "react-icons/bs";
import { FaHome, FaUsers, FaUserSecret, FaAddressCard } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineManageSearch } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <>
      <div className="drawer lg:drawer-open bg-green-300 dark:bg-gray-900 dark:text-gray-200">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden my-10"
          >
            Open Dashboard
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <div className="menu p-4 w-96 h-full bg-base-300 dark:bg-amber-900 space-y-4">
            <div className="flex justify-center items-center gap-3">
              <h2 className="text-center text-xl font-bold">Dashboard</h2>
              <div className="badge badge-warning text-white">
                {isAdmin ? "Admin" : isInstructor ? "Instructor" : "Student"}
              </div>
            </div>
            <div className="bg-sky-800 p-4 rounded-lg shadow-lg">
              <img
                src={user?.photoURL}
                alt=""
                className="w-16 h-16 mx-auto rounded-full border-4 border-pink-800 dark:border-white dark:bg-gray-500"
              />
              <div className="text-center">
                <h2 className="text-xl text-amber-500 font-bold">
                  {user?.displayName}
                </h2>
                <p className="text-white font-semibold italic">{user?.email}</p>
              </div>
            </div>

            {/* Conditional Sidebar */}
            {isAdmin ? (
              <>
                <div className="border-4 border-pink-800 dark:border-white rounded-lg p-4 flex flex-col gap-5">
                  <NavLink
                    to="/dashboard/adminhome"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "btn w-full text-center text-yellow-400 bg-teal-700 hover:bg-teal-800 border-0 focus:shadow-outline font-semibold px-3 py-2 rounded-lg shadow-lg transition-colors duration-200"
                        : isPending
                        ? "pending"
                        : "btn w-full bg-pink-800 hover:bg-black border-0 focus:shadow-outline text-white font-semibold px-3 py-2 rounded-lg shadow-lg"
                    }
                  >
                    <FaUserSecret size={28} /> Admin Home
                  </NavLink>
                  <NavLink
                    to="/dashboard/manageclass"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "btn w-full text-center text-yellow-400 bg-teal-700 hover:bg-teal-800 border-0 focus:shadow-outline font-semibold px-3 py-2 rounded-lg shadow-lg transition-colors duration-200"
                        : isPending
                        ? "pending"
                        : "btn w-full bg-pink-800 hover:bg-black border-0 focus:shadow-outline text-white font-semibold px-3 py-2 rounded-lg shadow-lg"
                    }
                  >
                    <MdOutlineManageSearch size={28} /> Manage Classes
                  </NavLink>
                  <NavLink
                    to="/dashboard/manageusers"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "btn w-full text-center text-yellow-400 bg-teal-700 hover:bg-teal-800 border-0 focus:shadow-outline font-semibold px-3 py-2 rounded-lg shadow-lg transition-colors duration-200"
                        : isPending
                        ? "pending"
                        : "btn w-full bg-pink-800 hover:bg-black border-0 focus:shadow-outline text-white font-semibold px-3 py-2 rounded-lg shadow-lg"
                    }
                  >
                    <FaUsers size={28} /> Manage Users
                  </NavLink>
                </div>
              </>
            ) : isInstructor ? (
              <>
                <div className="border-4 border-pink-800 dark:border-white rounded-lg p-4 flex flex-col gap-5">
                  <NavLink
                    to="/dashboard/instructorhome"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "btn w-full text-center text-yellow-400 bg-teal-700 hover:bg-teal-800 border-0 focus:shadow-outline font-semibold px-3 py-2 rounded-lg shadow-lg transition-colors duration-200"
                        : isPending
                        ? "pending"
                        : "btn w-full bg-pink-800 hover:bg-black border-0 focus:shadow-outline text-white font-semibold px-3 py-2 rounded-lg shadow-lg"
                    }
                  >
                    <FcManager size={28} /> Instructors Home
                  </NavLink>
                  <NavLink
                    to="/dashboard/addclass"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "btn w-full text-center text-yellow-400 bg-teal-700 hover:bg-teal-800 border-0 focus:shadow-outline font-semibold px-3 py-2 rounded-lg shadow-lg transition-colors duration-200"
                        : isPending
                        ? "pending"
                        : "btn w-full bg-pink-800 hover:bg-black border-0 focus:shadow-outline text-white font-semibold px-3 py-2 rounded-lg shadow-lg"
                    }
                  >
                    <FaAddressCard size={28} /> Add a Class
                  </NavLink>
                  <NavLink
                    to="/dashboard/myclass"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "btn w-full text-center text-yellow-400 bg-teal-700 hover:bg-teal-800 border-0 focus:shadow-outline font-semibold px-3 py-2 rounded-lg shadow-lg transition-colors duration-200"
                        : isPending
                        ? "pending"
                        : "btn w-full bg-pink-800 hover:bg-black border-0 focus:shadow-outline text-white font-semibold px-3 py-2 rounded-lg shadow-lg"
                    }
                  >
                    <HiAcademicCap size={28} /> My Classes
                  </NavLink>
                </div>
              </>
            ) : (
              <>
                <div className="border-4 border-pink-800 dark:border-white rounded-lg p-4 flex flex-col gap-5">
                  <NavLink
                    to="/dashboard/selectedclass"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "btn w-full text-center text-yellow-400 bg-teal-700 hover:bg-teal-800 border-0 focus:shadow-outline font-semibold px-3 py-2 rounded-lg shadow-lg transition-colors duration-200"
                        : isPending
                        ? "pending"
                        : "btn w-full bg-pink-800 hover:bg-black border-0 focus:shadow-outline text-white font-semibold px-3 py-2 rounded-lg shadow-lg"
                    }
                  >
                    <BiSelectMultiple size={28} /> My Selected Classes
                  </NavLink>
                  <NavLink
                    to="/dashboard/enrolledclass"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "btn w-full text-center text-yellow-400 bg-teal-700 hover:bg-teal-800 border-0 focus:shadow-outline font-semibold px-3 py-2 rounded-lg shadow-lg transition-colors duration-200"
                        : isPending
                        ? "pending"
                        : "btn w-full bg-pink-800 hover:bg-black border-0 focus:shadow-outline text-white font-semibold px-3 py-2 rounded-lg shadow-lg"
                    }
                  >
                    <AiOutlineDollar size={28} /> My Enrolled Classes
                  </NavLink>
                  <NavLink
                    to="/dashboard/paymenthistory"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "btn w-full text-center text-yellow-400 bg-teal-700 hover:bg-teal-800 border-0 focus:shadow-outline font-semibold px-3 py-2 rounded-lg shadow-lg transition-colors duration-200"
                        : isPending
                        ? "pending"
                        : "btn w-full bg-pink-800 hover:bg-black border-0 focus:shadow-outline text-white font-semibold px-3 py-2 rounded-lg shadow-lg"
                    }
                  >
                    <BsWalletFill size={28} /> Payment History
                  </NavLink>
                </div>
              </>
            )}

            {/* Normal Navigation */}
            <div className="border-4 border-pink-800 dark:border-white rounded-lg p-4 flex flex-col gap-5">
              <Link to="/">
                <button className="btn w-full text-center text-yellow-400 bg-teal-700 hover:bg-teal-800 border-0 focus:shadow-outline font-semibold px-3 py-2 rounded-lg shadow-lg transition-colors duration-200">
                  <FaHome size={28} /> Home
                </button>
              </Link>
              <Link to="/instructors">
                <button className="btn w-full text-center text-yellow-400 bg-teal-700 hover:bg-teal-800 border-0 focus:shadow-outline font-semibold px-3 py-2 rounded-lg shadow-lg transition-colors duration-200">
                  <GiTeacher size={28} /> Instructors
                </button>
              </Link>
              <Link to="/classes">
                <button className="btn w-full text-center text-yellow-400 bg-teal-700 hover:bg-teal-800 border-0 focus:shadow-outline font-semibold px-3 py-2 rounded-lg shadow-lg transition-colors duration-200">
                  <BsPersonVideo size={28} /> Classes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
