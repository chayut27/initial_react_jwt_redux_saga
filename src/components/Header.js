import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  // const authReducer = useSelector((state) => state.authReducer);
  // let navigate = useNavigate();
  const action = (type, payload) => dispatch({ type, payload });

  // useEffect(() => {
  // !authReducer.isLoggedIn && navigate("./login", { replace: true });
  // if (!authReducer.isLoggedIn) navigate("./login", { replace: true });

  // }, [authReducer]);

  useEffect(() => {
    /* ===== Responsive Sidepanel ====== */
    const sidePanelToggler = document.getElementById("sidepanel-toggler");
    const sidePanel = document.getElementById("app-sidepanel");
    const sidePanelDrop = document.getElementById("sidepanel-drop");
    const sidePanelClose = document.getElementById("sidepanel-close");

    window.addEventListener("load", function () {
      responsiveSidePanel();
    });

    window.addEventListener("resize", function () {
      responsiveSidePanel();
    });

    function responsiveSidePanel() {
      let w = window.innerWidth;
      if (w >= 1200) {
        // if larger
        //console.log('larger');
        sidePanel.classList.remove("sidepanel-hidden");
        sidePanel.classList.add("sidepanel-visible");
      } else {
        // if smaller
        //console.log('smaller');
        sidePanel.classList.remove("sidepanel-visible");
        sidePanel.classList.add("sidepanel-hidden");
      }
    }

    sidePanelToggler.addEventListener("click", () => {
      if (sidePanel.classList.contains("sidepanel-visible")) {
        // console.log("visible");
        sidePanel.classList.remove("sidepanel-visible");
        sidePanel.classList.add("sidepanel-hidden");
      } else {
        // console.log("hidden");
        sidePanel.classList.remove("sidepanel-hidden");
        sidePanel.classList.add("sidepanel-visible");
      }
    });

    sidePanelClose.addEventListener("click", (e) => {
      e.preventDefault();
      sidePanelToggler.click();
    });

    sidePanelDrop.addEventListener("click", (e) => {
      sidePanelToggler.click();
    });
  }, []);

  return (
    <div className="app-header-inner">
      <div className="container-fluid py-2">
        <div className="app-header-content">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <a
                id="sidepanel-toggler"
                className="sidepanel-toggler d-inline-block d-xl-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  role="img"
                >
                  <title>Menu</title>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M4 7h22M4 15h22M4 23h22"
                  />
                </svg>
              </a>
            </div>
            {/*//col*/}

            <div className="app-utilities col-auto">
              <div className="app-utility-item app-user-dropdown dropdown">
                <a
                  className="dropdown-toggle"
                  id="user-dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  <img
                    src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="avatar"
                    alt="user profile"
                  />
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="user-dropdown-toggle"
                >
                  <li> 
                    <a href="#"
                      className="dropdown-item"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => action("LOGOUT")}
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
              {/*//app-user-dropdown*/}
            </div>
            {/*//app-utilities*/}
          </div>
          {/*//row*/}
        </div>
        {/*//app-header-content*/}
      </div>
      {/*//container-fluid*/}
    </div>
  );
}

export default Header;
