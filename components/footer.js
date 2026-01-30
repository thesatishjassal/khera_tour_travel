const Footer = () => {
  return (
    <footer className="footer-area desktop-only">
      <div className="footer-widget">
        <div className="container">
          <div className="row footer-widget-wrapper pt-120 pb-70">
            <div className="col-md-6 col-lg-5">
              <div className="footer-widget-box about-us">
                <a href="/" className="footer-logo white-bg">
                  <img src="../Images/white-logo.png" alt="" />
                </a>
                <p className="mb-3">
                  Khera Tour and Travel offers reliable and efficient travel
                  services, ensuring a seamless and enjoyable journey. Count on
                  us for exceptional service and unforgettable travel
                  experiences.{" "}
                </p>
                <ul className="footer-contact">
                  <li>
                    <a href="tel:+91 95010 98488">
                      <i className="fa fa-phone"></i>+91 95010 98488
                    </a>
                  </li>

                  <li>
                    <a href="mailto:kheratoursandtravel@gmail.com">
                      <i className="fa fa-envelope"></i>
                      kheratoursandtravel@gmail.com
                    </a>
                  </li>

                  <li>
                    <div>
                      <i className="fa fa-location"></i>
                      <strong>Khera Tour and Travel</strong>
                      <br />
                      B2/233 Raj nagar, basti bawakhel, Jalandhar , Pin-144021
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6 col-xs-6">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Quick Links</h4>
                <ul className="footer-list">
                  <li>
                    <a href="/">
                      <i className="fa fa-caret-right"></i> Home
                    </a>
                  </li>
                  <li>
                    <a href="/about">
                      <i className="fa fa-caret-right"></i> About Us
                    </a>
                  </li>
                  <li>
                    <a href="/taxi">
                      <i className="fa fa-caret-right"></i> Taxi
                    </a>
                  </li>
                  <li>
                    <a href="/packages">
                      <i className="fa fa-caret-right"></i> Packages
                    </a>
                  </li>
                  {/* <li>
                    <a href="/destinations">
                      <i className="fa fa-caret-right"></i> Destinations
                    </a>
                  </li> */}
                  <li>
                    <a href="/contact">
                      <i className="fa fa-caret-right"></i> Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Newsletter</h4>
                <div className="footer-newsletter">
                  <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                  <div className="subscribe-form">
                    <form action="#">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                      <button className="theme-btn" type="submit">
                        Subscribe Now <i className="fa fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <p className="copyright-text">
                © Copyright <span id="date">2024</span>
                <a href="#">&nbsp; Khera Tour and Travel </a> All Rights
                Reserved.
              </p>
            </div>
            <div className="col-md-6 align-self-center">
              <ul className="footer-social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
