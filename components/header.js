"use client";

import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper">
            <div className="header-top-left">
              <div className="header-top-contact">
                <ul>
                  <li>
                    <a href="mailto:kheratoursandtravel@gmail.com">
                      <i className="fa fa-envelope"></i> &nbsp;
                      kheratoursandtravel@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+91 95010 98488">
                      <i className="fa fa-phone-volume"></i> +91 95010 98488
                    </a>
                  </li>
                  {/* <li>
                    <a href="tel:+91 95010 98488">
                      <i className="fa fa-phone-volume"></i> +91 95010 98488
                    </a>
                  </li> */}
                  <li>
                    <a href="#">
                      <i className="fa fa-clock"></i> Sun - Fri (24HRS)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-top-right">
              <div className="header-top-social">
                <span>Follow Us: </span>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-navigation">
        <nav className="navbar navbar-expand-lg">
          <div className="container position-relative">
            <a className="navbar-brand" href="/">
              <img src="../Images/logo.png" alt="logo" />
            </a>
            <div className="mobile-menu-right">
              <a type="submit" href="tel:+91 95010 98488" className="theme-btn">
                Call Now <i className="fa-solid fa-phone-flip"></i>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li
                  className={`nav-item ${
                    pathname === "/about" ? "active" : ""
                  }`}
                >
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li
                  className={`nav-item ${pathname === "/taxi" ? "active" : ""}`}
                >
                  <a className="nav-link" href="/taxi">
                    Taxi
                  </a>
                </li>
                <li
                  className={`nav-item ${
                    pathname === "/packages" ? "active" : ""
                  }`}
                >
                  <a className="nav-link" href="/packages">
                    Packages
                  </a>
                </li>
                {/* <li
                  className={`nav-item ${
                    pathname === "/destinations" ? "active" : ""
                  }`}
                >
                  <a className="nav-link" href="/destinations">
                    Destinations
                  </a>
                </li> */}

                <li
                  className={`nav-item ${
                    pathname === "/contact" ? "active" : ""
                  }`}
                >
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="nav-right">
                <div className="nav-right-btn mt-2">
                  <a
                    href="tel:+91 95010 98488"
                    className="theme-btn"
                  >
                    <span className="fa fa-taxi"></span>Book A Taxi
                  </a>
                </div>
                <div className="sidebar-btn">
                  <button type="button" className="nav-right-link">
                    <i className="fa fa-bars-filter"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="search-area">
              <form action="#">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Keyword..."
                  />
                  <button type="submit" className="search-icon-btn">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
