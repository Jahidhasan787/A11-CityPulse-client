import React, { use } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { AuthContext } from "../../AuthProvider";
import UseRole from "../../UseRole";
import {
  MdAssignmentAdd,
  MdDashboard,
  MdManageAccounts,
  MdOutlinePayments,
} from "react-icons/md";
import { HiClipboardList } from "react-icons/hi";
import { FaRegListAlt, FaUserShield } from "react-icons/fa";

const DashboardLayout = () => {
  const { role } = UseRole();
  const { user } = use(AuthContext);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <nav className="navbar w-full gap-1 justify-between bg-base-300">
          <div className="flex gap-1 items-center">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <Link to={"/"} data-tip="Menu">
              <p className="font-bold text-xl text-blue-700">
                City<span className="text-red-500">Pulse</span>
              </p>
            </Link>
          </div>

          {user && (
            <>
              <div className="dropdown mr-10">
                <div tabIndex={0} className="ml-10 ">
                  <img
                    className="rounded-full h-12 min-w-10 outline"
                    src={user.photoURL || "/Avatar.png"}
                    alt=""
                  />
                </div>
                <ul
                  tabIndex="0"
                  className="menu  dropdown-content bg-base-100 mt-2 w-30 p-2 shadow "
                >
                  <p className="text-center font-semibold pb-1 bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                    {user.displayName}
                  </p>
                </ul>
              </div>
            </>
          )}
        </nav>

        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          <ul className="menu w-full grow">
            <li>
              <Link
                to={"/"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>
            <hr className="is-drawer-close:hidden text-gray-300" />
            <li>
              {role === "user" && (
                <>
                  <Link
                    to={"/dashboard/my-issues"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="my issue"
                  >
                    <HiClipboardList />
                    <span className="is-drawer-close:hidden"> My Issues</span>
                  </Link>
                  <Link
                    to={"/dashboard/report-issue"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Report issue"
                  >
                    <MdAssignmentAdd />
                    <span className="is-drawer-close:hidden">
                      {" "}
                      Report Issue
                    </span>
                  </Link>
                </>
              )}
              {role === "admin" && (
                <>
                  <Link
                    to={"/dashboard/all-issues"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="All issues"
                  >
                    <FaRegListAlt />
                    <span className="is-drawer-close:hidden">All Issues</span>
                  </Link>
                  <Link
                    to={"/dashboard/payment-history"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Payments"
                  >
                    <MdOutlinePayments />
                    <span className="is-drawer-close:hidden">
                      {" "}
                      Payment History
                    </span>
                  </Link>
                  <Link
                    to={"/dashboard/approve-staff"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Approve Staff"
                  >
                    <MdManageAccounts />
                    <span className="is-drawer-close:hidden">
                      Staff Approval
                    </span>
                  </Link>
                  <Link
                    to={"/dashboard/user-manage"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="User management"
                  >
                    <FaUserShield />
                    <span className="is-drawer-close:hidden">
                      User Management
                    </span>
                  </Link>
                </>
              )}

              {/* <div
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right "
                data-tip="Menu"
              >

                 
                    {role === "admin" && (
                      <>
                        <NavLink
                          to={"/dashboard/payment-history"}
                          className={"py-2"}
                        >
                          Payments History
                        </NavLink>
                        <NavLink
                          to={"/dashboard/approve-staff"}
                          className={"py-2"}
                        >
                          Approve Staff
                        </NavLink>
                        <NavLink
                          to={"/dashboard/user-manage"}
                          className={"py-2"}
                        >
                          User Management
                        </NavLink>
                      </>
                    )}
                  </ul>
                </div>
                <span className="is-drawer-close:hidden flex flex-col">
                  <NavLink to={"/dashboard/my-issues"} className={"py-2"}>
                    My Issues
                  </NavLink>
                  <NavLink to={"/dashboard/report-issue"} className={"py-2"}>
                    Report Issues
                  </NavLink>
                  {role === "admin" && (
                    <>
                      <NavLink
                        to={"/dashboard/payment-history"}
                        className={"py-2"}
                      >
                        Payments History
                      </NavLink>
                      <NavLink
                        to={"/dashboard/approve-staff"}
                        className={"py-2"}
                      >
                        Approve Staff
                      </NavLink>
                      <NavLink to={"/dashboard/user-manage"} className={"py-2"}>
                        User Management
                      </NavLink>
                    </>
                  )}
                </span>
              </div> */}
            </li>
            <hr className="is-drawer-close:hidden text-gray-300" />
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
            <li>
              <Link
                to={"/dashboard"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Dashboard"
              >
                <MdDashboard />
                <span className="is-drawer-close:hidden">Dashboard</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
