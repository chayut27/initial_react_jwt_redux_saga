import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/images/app-logo.svg";

function Sidebar() {
  return (
    <div id="app-sidepanel" className="app-sidepanel">
      <div id="sidepanel-drop" className="sidepanel-drop" />
      <div className="sidepanel-inner d-flex flex-column">
        <a href="#" id="sidepanel-close" className="sidepanel-close d-xl-none">
          ×
        </a>
        <div className="app-branding">
          <Link className="app-logo" to="./">
            <img className="logo-icon me-2" src={Logo} alt="logo" />
            <span className="logo-text">PORTAL</span>
          </Link>
        </div>
        {/*//app-branding*/}
        <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
          <ul className="app-menu list-unstyled accordion" id="menu-accordion">
            <li className="nav-item">
              {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
              <NavLink className="nav-link" to="/">
                <span className="nav-icon">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-house-door"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                </span>
                <span className="nav-link-text">Overview</span>
              </NavLink>
              {/*//nav-link*/}
            </li>
            {/*//nav-item*/}
            <li className="nav-item">
              {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
              <NavLink className="nav-link" to="employees">
                <span className="nav-icon">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-card-list"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                    />
                    <circle cx="3.5" cy="5.5" r=".5" />
                    <circle cx="3.5" cy={8} r=".5" />
                    <circle cx="3.5" cy="10.5" r=".5" />
                  </svg>
                </span>
                <span className="nav-link-text">Employees</span>
              </NavLink>
              {/*//nav-link*/}
            </li>
            {/*//nav-item*/}
            <li className="nav-item has-submenu">
              {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
              <NavLink
                className="nav-link submenu-toggle"
                to="/notifications"
                data-bs-toggle="collapse"
                data-bs-target="#submenu-1"
                aria-expanded="false"
                aria-controls="submenu-1"
              >
                <span className="nav-icon">
                  {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-files"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4z"
                    />
                    <path d="M6 0h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1H4a2 2 0 0 1 2-2z" />
                  </svg>
                </span>
                <span className="nav-link-text">Pages</span>
                <span className="submenu-arrow">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-chevron-down"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
                {/*//submenu-arrow*/}
              </NavLink>
              {/*//nav-link*/}
              <div
                id="submenu-1"
                className="collapse submenu submenu-1"
                data-bs-parent="#menu-accordion"
              >
                <ul className="submenu-list list-unstyled">
                  <li className="submenu-item">
                    <NavLink className="submenu-link" to="/notifications">
                      Notifications
                    </NavLink>
                  </li>
                  <li className="submenu-item">
                    <NavLink className="submenu-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            {/*//nav-item*/}
          </ul>
          {/*//app-menu*/}
        </nav>
        {/*//app-nav*/}
      </div>
      {/*//sidepanel-inner*/}
    </div>
  );
}

export default Sidebar;
