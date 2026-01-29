export default function About() {
  return (
    <>
      <main className="main">
        <div
          className="site-breadcrumb"
          style={{
            background: "url(/Images/01.jpg)",
          }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">About Us</h2>
            <ul className="breadcrumb-menu">
              <li>
                <a href="/">Home</a> <i className="fa-solid fa-caret-right"></i>
              </li>
              <li className="active">About Us</li>
            </ul>
          </div>
        </div>

        <div className="about-area py-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="about-left wow fadeInLeft"
                  data-wow-delay=".25s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.25s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <div className="about-img">
                    <img src="../Images/Kia-cerans.png" alt="" />
                  </div>
                  <div className="about-experience">
                    <div className="about-experience-icon">
                      <img src="../Images/taxi-booking.svg" alt="" />
                    </div>
                    <b>
                      20 Years Of <br /> Quality Service
                    </b>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="about-right wow fadeInRight"
                  data-wow-delay=".25s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.25s",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="site-heading mb-3">
                    <span className="site-title-tagline justify-content-start">
                      <i className="flaticon-drive"></i> About Us
                    </span>
                    <h2 className="site-title">
                      We Provide Trusted <span>Taxi Services</span> Across India
                    </h2>
                  </div>
                  <p className="about-text">
                    Book new, clean, and sanitized cabs with verified, educated
                    drivers. Our 24/7 online service offers reliable round trips
                    at competitive taxi fares.
                  </p>
                  <div className="about-list-wrapper">
                    <ul className="about-list list-unstyled">
                      <li>
                        Get estimates for all types of vehicles: Sedan, SUV,
                        Hatchback.
                      </li>
                      <li>
                        Tempo Traveler and buses available for group travel.
                      </li>
                      <li>
                        Special tour packages tailored to your chosen
                        destinations.
                      </li>
                    </ul>
                  </div>
                  <a href="tel:+91 95010 98488" className="theme-btn mt-4">
                    Call Now<i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="testimonial-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">
                    <i className="flaticon-drive"></i> Testimonials
                  </span>
                  <h2 className="site-title text-white">
                    What Our Client <span>Say's</span>
                  </h2>
                  <div className="heading-divider"></div>
                </div>
              </div>
            </div>
            <div className="testimonial-slider owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-2412px, 0px, 0px)",
                    transition: "0.25s",
                    width: "3920px",
                  }}
                >
                  <div
                    className="owl-item cloned"
                    style={{
                      width: "271.5px",
                      marginRight: "30px",
                    }}
                  >
                    <div className="testimonial-single">
                      <div className="testimonial-content">
                        <div className="testimonial-author-img">
                          <img src="../Images//02.jpg" alt="" />
                        </div>
                        <div className="testimonial-author-info">
                          <h4>Gordo Novak</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                      <div className="testimonial-quote">
                        <p>
                          There are many variations of words suffered available
                          to the have majority but the majority suffer to
                          alteration injected hidden the middle text.
                        </p>
                      </div>
                      <div className="testimonial-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{
                      width: "271.5px",
                      marginRight: "30px",
                    }}
                  >
                    <div className="testimonial-single">
                      <div className="testimonial-content">
                        <div className="testimonial-author-img">
                          <img src="../Images//03.jpg" alt="" />
                        </div>
                        <div className="testimonial-author-info">
                          <h4>Reid Butt</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                      <div className="testimonial-quote">
                        <p>
                          There are many variations of words suffered available
                          to the have majority but the majority suffer to
                          alteration injected hidden the middle text.
                        </p>
                      </div>
                      <div className="testimonial-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{
                      width: "271.5px",
                      marginRight: "30px",
                    }}
                  >
                    <div className="testimonial-single">
                      <div className="testimonial-content">
                        <div className="testimonial-author-img">
                          <img src="../Images//04.jpg" alt="" />
                        </div>
                        <div className="testimonial-author-info">
                          <h4>Parker Jime</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                      <div className="testimonial-quote">
                        <p>
                          There are many variations of words suffered available
                          to the have majority but the majority suffer to
                          alteration injected hidden the middle text.
                        </p>
                      </div>
                      <div className="testimonial-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{
                      width: "271.5px",
                      marginRight: "30px",
                    }}
                  >
                    <div className="testimonial-single">
                      <div className="testimonial-content">
                        <div className="testimonial-author-img">
                          <img src="../Images//05.jpg" alt="" />
                        </div>
                        <div className="testimonial-author-info">
                          <h4>Heruli Nez</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                      <div className="testimonial-quote">
                        <p>
                          There are many variations of words suffered available
                          to the have majority but the majority suffer to
                          alteration injected hidden the middle text.
                        </p>
                      </div>
                      <div className="testimonial-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{
                      width: "271.5px",
                      marginRight: "30px",
                    }}
                  >
                    <div className="testimonial-single">
                      <div className="testimonial-content">
                        <div className="testimonial-author-img">
                          <img src="../Images//01.jpg" alt="" />
                        </div>
                        <div className="testimonial-author-info">
                          <h4>Sylvia Green</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                      <div className="testimonial-quote">
                        <p>
                          There are many variations of words suffered available
                          to the have majority but the majority suffer to
                          alteration injected hidden the middle text.
                        </p>
                      </div>
                      <div className="testimonial-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{
                      width: "271.5px",
                      marginRight: "30px",
                    }}
                  >
                    <div className="testimonial-single">
                      <div className="testimonial-content">
                        <div className="testimonial-author-img">
                          <img src="../Images//02.jpg" alt="" />
                        </div>
                        <div className="testimonial-author-info">
                          <h4>Gordo Novak</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                      <div className="testimonial-quote">
                        <p>
                          There are many variations of words suffered available
                          to the have majority but the majority suffer to
                          alteration injected hidden the middle text.
                        </p>
                      </div>
                      <div className="testimonial-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{
                      width: "271.5px",
                      marginRight: "30px",
                    }}
                  >
                    <div className="testimonial-single">
                      <div className="testimonial-content">
                        <div className="testimonial-author-img">
                          <img src="../Images//03.jpg" alt="" />
                        </div>
                        <div className="testimonial-author-info">
                          <h4>Reid Butt</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                      <div className="testimonial-quote">
                        <p>
                          There are many variations of words suffered available
                          to the have majority but the majority suffer to
                          alteration injected hidden the middle text.
                        </p>
                      </div>
                      <div className="testimonial-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{
                      width: "271.5px",
                      marginRight: "30px",
                    }}
                  >
                    <div className="testimonial-single">
                      <div className="testimonial-content">
                        <div className="testimonial-author-img">
                          <img src="../Images//04.jpg" alt="" />
                        </div>
                        <div className="testimonial-author-info">
                          <h4>Parker Jime</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                      <div className="testimonial-quote">
                        <p>
                          There are many variations of words suffered available
                          to the have majority but the majority suffer to
                          alteration injected hidden the middle text.
                        </p>
                      </div>
                      <div className="testimonial-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{
                      width: "271.5px",
                      marginRight: "30px",
                    }}
                  >
                    <div className="testimonial-single">
                      <div className="testimonial-content">
                        <div className="testimonial-author-img">
                          <img src="../Images//05.jpg" alt="" />
                        </div>
                        <div className="testimonial-author-info">
                          <h4>Heruli Nez</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                      <div className="testimonial-quote">
                        <p>
                          There are many variations of words suffered available
                          to the have majority but the majority suffer to
                          alteration injected hidden the middle text.
                        </p>
                      </div>
                      <div className="testimonial-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned active"
                    style={{
                      width: "271.5px",
                      marginRight: "30px",
                    }}
                  >
                    <div className="testimonial-single">
                      <div className="testimonial-content">
                        <div className="testimonial-author-img">
                          <img src="../Images//01.jpg" alt="" />
                        </div>
                        <div className="testimonial-author-info">
                          <h4>Sylvia Green</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                      <div className="testimonial-quote">
                        <p>
                          There are many variations of words suffered available
                          to the have majority but the majority suffer to
                          alteration injected hidden the middle text.
                        </p>
                      </div>
                      <div className="testimonial-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned active"
                    style={{
                      width: "271.5px",
                      marginRight: "30px",
                    }}
                  >
                    <div className="testimonial-single">
                      <div className="testimonial-content">
                        <div className="testimonial-author-img">
                          <img src="../Images//02.jpg" alt="" />
                        </div>
                        <div className="testimonial-author-info">
                          <h4>Gordo Novak</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                      <div className="testimonial-quote">
                        <p>
                          There are many variations of words suffered available
                          to the have majority but the majority suffer to
                          alteration injected hidden the middle text.
                        </p>
                      </div>
                      <div className="testimonial-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned active"
                    style={{
                      width: "271.5px",
                      marginRight: "30px",
                    }}
                  >
                    <div className="testimonial-single">
                      <div className="testimonial-content">
                        <div className="testimonial-author-img">
                          <img src="../Images//03.jpg" alt="" />
                        </div>
                        <div className="testimonial-author-info">
                          <h4>Reid Butt</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                      <div className="testimonial-quote">
                        <p>
                          There are many variations of words suffered available
                          to the have majority but the majority suffer to
                          alteration injected hidden the middle text.
                        </p>
                      </div>
                      <div className="testimonial-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{
                      width: "271.5px",
                      marginRight: "30px",
                    }}
                  >
                    <div className="testimonial-single">
                      <div className="testimonial-content">
                        <div className="testimonial-author-img">
                          <img src="../Images//04.jpg" alt="" />
                        </div>
                        <div className="testimonial-author-info">
                          <h4>Parker Jime</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                      <div className="testimonial-quote">
                        <p>
                          There are many variations of words suffered available
                          to the have majority but the majority suffer to
                          alteration injected hidden the middle text.
                        </p>
                      </div>
                      <div className="testimonial-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
}
