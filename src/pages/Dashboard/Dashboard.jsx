import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillSignal, AiOutlineLineChart } from "react-icons/ai";

const Dashboard = () => {
  const collapseStye = {
    marginTop: "0px",
  };
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Dashboard
        </label>
        {/* <h2 className='text-3xl text-orange-300'>Dashboard</h2> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4  w-80 bg-white text-base-content  ">
          <p className="ml-3 text-slate-500 font-medium text-base">
            DASHBOARDS
          </p>
          <li className="hover:text-indigo-700 ">
            <NavLink
              to="default"
              className={({ isActive }) =>
                isActive ? " text-indigo-700 bg-slate-200 " : "   "
              }
            >
              <BsFillCartFill /> Default
            </NavLink>
          </li>
          <li className="hover:text-indigo-700 ">
            <NavLink
              to="sales"
              className={({ isActive }) =>
                isActive ? " text-indigo-700 " : "   "
              }
            >
              <AiOutlineLineChart /> Sales
            </NavLink>
          </li>
          <li className="hover:text-indigo-700">
            <NavLink
              to="analytics"
              className={({ isActive }) =>
                isActive ? " text-indigo-700 " : "   "
              }
            >
              <AiFillSignal /> Analytics
            </NavLink>
          </li>

          <p className="ml-3 mt-10 text-slate-500 font-medium text-base">
            PRE-BUILT PAGES
          </p>
          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title  p-3">Projects</div>
            <div className="collapse-content ">
              <p>Projects Cards</p>
              <p>Projects Lists</p>
            </div>
          </div>

          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer  h-10" />
            <div className="collapse-title p-3 ">User Manage</div>
            <div className="collapse-content ">
              <p>User One</p>
              <p>User Two</p>
              <p>User Three</p>
              <p>User Four</p>
            </div>
          </div>

          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title p-3  ">Orders</div>
            <div className="collapse-content ">
              <p>Order One</p>
              <p>Order Two</p>
              <p>Order Three</p>
              <p>Order Four</p>
            </div>
          </div>

          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title p-3  ">AML</div>
            <div className="collapse-content ">
              <p>Order One</p>
              <p>Order Two</p>
              <p>Order Three</p>
              <p>Order Four</p>
            </div>
          </div>

          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title p-3  ">Application</div>
            <div className="collapse-content ">
              <p>Application</p>
              <p>Order Two</p>
              <p>Order Three</p>
              <p>Order Four</p>
            </div>
          </div>
          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title p-3  ">Products</div>
            <div className="collapse-content ">
              <p>Application</p>
              <p>Order Two</p>
              <p>Order Three</p>
              <p>Order Four</p>
            </div>
          </div>
          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title p-3  ">Invoice</div>
            <div className="collapse-content ">
              <p>Application</p>
              <p>Order Two</p>
              <p>Order Three</p>
              <p>Order Four</p>
            </div>
          </div>

          <li className="hover:text-indigo-700 ">
            <NavLink
              to="p"
              className={({ isActive }) =>
                isActive ? " text-indigo-700 " : "   "
              }
            >
              Pricing Table
            </NavLink>
          </li>

          <li className="hover:text-indigo-700 ">
            <NavLink
              to="i"
              className={({ isActive }) =>
                isActive ? " text-indigo-700 " : "   "
              }
            >
              Image Gallery
            </NavLink>
          </li>

          <p className="ml-3 mt-10 text-slate-500 font-medium text-base">
            MISC PAGES
          </p>
          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title  p-3">Auth Pages</div>
            <div className="collapse-content ">
              <p>Projects Cards</p>
              <p>Projects Lists</p>
            </div>
          </div>
          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title  p-3">Error Pages</div>
            <div className="collapse-content ">
              <p>Projects Cards</p>
              <p>Projects Lists</p>
            </div>
          </div>

          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title  p-3">Other Pages</div>
            <div className="collapse-content ">
              <p>Projects Cards</p>
              <p>Projects Lists</p>
            </div>
          </div>


          <p className="ml-3 mt-10 text-slate-500 font-medium text-base">
          COMPONENTS
          </p>
          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title  p-3">Ui Elements</div>
            <div className="collapse-content ">
              <p>Projects Cards</p>
              <p>Projects Lists</p>
            </div>
          </div>
          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title  p-3">Crafted Icons</div>
            <div className="collapse-content ">
              <p>Projects Cards</p>
              <p>Projects Lists</p>
            </div>
          </div>

          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title  p-3">Tables</div>
            <div className="collapse-content ">
              <p>Projects Cards</p>
              <p>Projects Lists</p>
            </div>
          </div>

          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title  p-3">Forms</div>
            <div className="collapse-content ">
              <p>Projects Cards</p>
              <p>Projects Lists</p>
            </div>
          </div>
          
          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title  p-3">Charts</div>
            <div className="collapse-content ">
              <p>Projects Cards</p>
              <p>Projects Lists</p>
            </div>
          </div>

          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title  p-3">Widgets</div>
            <div className="collapse-content ">
              <p>Projects Cards</p>
              <p>Projects Lists</p>
            </div>
          </div>

          <div
            className="collapse collapse-arrow mt-0 p-0"
            style={collapseStye}
          >
            <input type="checkbox" className="peer h-10" />
            <div className="collapse-title  p-3">Miscellaneous</div>
            <div className="collapse-content ">
              <p>Projects Cards</p>
              <p>Projects Lists</p>
            </div>
          </div>

          <li className="hover:text-indigo-700 ">
            <NavLink
              to="e"
              className={({ isActive }) =>
                isActive ? " text-indigo-700 " : "   "
              }
            >
              Email Template
            </NavLink>
          </li>


          
          
          
          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
