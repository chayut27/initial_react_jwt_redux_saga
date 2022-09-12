import React from "react";

function Footer() {
  return (
    <footer className="app-footer">
      <div className="container text-center py-3">
        {/*/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) * /*/}
        <small className="copyright">
          Copyright
          <i className="fas fa-heart" style={{ color: "#fb866a" }} /> by{" "}
          <a
            className="app-link"
            href="http://www.etneca.co.th/"
            target="_blank"
          >
            ETNECA
          </a>{" "}
        </small>
      </div>
    </footer>
  );
}

export default Footer;
