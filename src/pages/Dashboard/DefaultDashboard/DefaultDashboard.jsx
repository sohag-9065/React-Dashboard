import React from "react";

const DefaultDashboard = () => {
  return (
    <div className="min-h-screen  bg-slate-50 p-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold text-slate-800">Dashboard</h1>

        <div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1">
              î¦Œ Last 30 Days î§“
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 0</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultDashboard;
