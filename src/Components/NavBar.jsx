import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">CommunionHub</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
            <a>Events</a>
            </li>
            <li>
            <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
