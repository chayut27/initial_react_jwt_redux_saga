import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import EtnecaLogo from "../../assets/images/etneca-logo.png";

function index() {
  return (
    <div className="app app-404-page">
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-md-11 col-lg-7 col-xl-6 mx-auto">
            <div className="app-branding text-center mb-5">
              <Link className="app-logo" to="/">
                <img width={220} src={EtnecaLogo} alt="logo" />
              </Link>
            </div>
            {/*//app-branding*/}
            <div className="app-card p-5 text-center shadow-sm">
              <h1 className="page-title mb-4">
                404
                <br />
                <span className="font-weight-light">Page Not Found</span>
              </h1>
              <div className="mb-4">
                Sorry, we can't find the page you're looking for.
              </div>
              {/* <Link className="btn app-btn-primary" to="/">
                Go to home page
              </Link> */}
              <button className="btn app-btn-primary" to="/">
                Go to home page
              </button>
              <button className="btn app-btn-primary" to="/">
                Go to home page
              </button>
            </div>
          </div>
          {/*//col*/}
        </div>
        {/*//row*/}
      </div>
      {/*//container*/}

      <Footer />
    </div>
  );
}

export default index;
