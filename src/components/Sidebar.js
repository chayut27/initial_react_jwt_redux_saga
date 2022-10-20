import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo_mini.png";
import _nav from "../_nav";

function Sidebar() {
  const location = useLocation();

  return (
    <div id="app-sidepanel" className="app-sidepanel">
      <div id="sidepanel-drop" className="sidepanel-drop" />
      <div className="sidepanel-inner d-flex flex-column">
        <a id="sidepanel-close" className="sidepanel-close d-xl-none">
          ×
        </a>
        <div className="app-branding p-0 my-3 mx-auto">
          <Link className="app-logo" to="./">
            <img className="logo-icon" src={Logo} alt="logo" />
            {/* <span className="logo-text">PORTAL</span> */}
          </Link>
        </div>
        <div className="d-flex align-items-center ps-2 mb-3 mt-4">
          <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="avatar me-2 shadow" alt="" />
          <div className="text-truncate">
            <h6 className="mb-0">
              ADMIN NAME
            </h6>
            <span className="mb-0 text-muted">ADMIN</span>
          </div>
        </div>
        {/*//app-branding*/}
        <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
          <ul className="app-menu list-unstyled accordion" id="menu-accordion">
            {_nav.map((resNav, indexNav) => (
              <React.Fragment key={indexNav}>
                {resNav.header ? (
                  <li className="nav-header ps-2 py-2 fw-bold small">{resNav.header}</li>
                ) : (
                  ""
                )}
                {resNav.menu.map((resMenu, indexMenu) => (
                  <React.Fragment key={indexMenu}>
                    {resMenu.submenu.length === 0 ? (
                      <li className="nav-item">
                        <NavLink className="nav-link" to={resMenu.url}>
                          <span className="nav-icon">{resMenu.icon}</span>
                          <span className="nav-link-text">{resMenu.name}</span>
                        </NavLink>
                      </li>
                    ) : (
                      <li className="nav-item has-submenu">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "nav-link submenu-toggle active collapsed"
                              : "nav-link submenu-toggle"
                          }
                          to={resMenu.url}
                          data-bs-toggle="collapse"
                          data-bs-target={`#submenu-${indexMenu}`}
                          aria-expanded={
                            location.pathname.startsWith(resMenu.url)
                              ? "true"
                              : "false"
                          }
                          aria-controls={`submenu-${indexMenu}`}
                        >
                          <span className="nav-icon">{resMenu.icon}</span>
                          <span className="nav-link-text">{resMenu.name}</span>
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
                        </NavLink>
                        <div
                          id={`submenu-${indexMenu}`}
                          className={`collapse submenu submenu-${indexMenu} ${location.pathname.startsWith(resMenu.url)
                            ? "show"
                            : ""
                            }`}
                          data-bs-parent="#menu-accordion"
                        >
                          <ul className="submenu-list list-unstyled">
                            {resMenu.submenu.map((resSubMenu, indexSubMenu) => (
                              <li key={indexSubMenu} className="submenu-item">
                                <NavLink
                                  className="submenu-link"
                                  to={resSubMenu.url}
                                >
                                  {resSubMenu.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
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
