import React from "react";

function Header() {
  return (
    <div className="container-fluid" id="navbar-example">
      <nav
        className="navbar bg-body-tertiary navbar-expand-lg navbar-light bg-light fixed-top"
        id="navbar-example2"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            Home
          </a>
          <button
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarNav"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse nav-pills" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a aria-current="page" className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Products
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="scrollspy-example bg-body-tertiary p-3 rounded-2 h-50"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        tabIndex={0}
      >
      </div>
    </div>
  );
}

export default Header;
