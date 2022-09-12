import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const loading = (
  <div className="spinner-border text-primary spinner-border-sm" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

function DefaultLayout() {
  return (
    <div className="app">
      <header className="app-header fixed-top">
        <Header />
        {/*//app-header-inner*/}
        <Sidebar />
        {/*//app-sidepanel*/}
      </header>
      {/*//app-header*/}

      <div className="app-wrapper">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
            <Suspense fallback={loading}>
              <Outlet />
            </Suspense>
          </div>
          {/*//container-fluid*/}
        </div>
        {/*//app-content*/}
        <Footer />
        {/*//app-footer*/}
      </div>
      {/*//app-wrapper*/}
    </div>
  );
}

export default DefaultLayout;
