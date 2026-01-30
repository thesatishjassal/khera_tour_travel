import ContactForm from "../../../components/ContactForm";

export default function Contact() {
  return (
    <>
      <main className="main">
        <div
          className="site-breadcrumb"
          style={{ background: "url(/Images/01.jpg)" }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">Contact Us</h2>
            <ul className="breadcrumb-menu">
              <li>
                <a href="/">Home</a> <i className="fa-solid fa-caret-right"></i>
              </li>
              <li className="active">Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="contact-area py-120">
          <div className="container">
            <div className="contact-content">
              <div className="row">
                <div className="col-md-3">
                  <div className="contact-info">
                    <div className="contact-info-icon">
                      <i className="fa fa-map-location-dot"></i>
                    </div>
                    <div className="contact-info-content">
                      <h5>Office Address</h5>
                      <p>
                        {" "}
                        B2/233 Raj nagar, basti bawakhel, Jalandhar , Pin-144021
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="contact-info">
                    <div className="contact-info-icon">
                      <i className="fa fa-phone-volume"></i>
                    </div>
                    <div className="contact-info-content">
                      <h5>Call Us</h5>
                      <p>
                        {" "}
                        <a href="tel:+91 95010 98488">
                          <i className="fa fa-phone-volume"></i> +91 95010 98488
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="contact-info">
                    <div className="contact-info-icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="contact-info-content">
                      <h5>Email Us</h5>
                      <p>
                        <a href="mailto:+kheratoursandtravel@gmail.com">
                          kheratoursandtravel@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="contact-info">
                    <div className="contact-info-icon">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div className="contact-info-content">
                      <h5>Open Time</h5>
                      <p>Mon - Sat (10.00AM - 05.30PM)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-wrapper">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="contact-img">
                    <img src="./Images/contact.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="contact-form">
                    <div className="contact-form-header">
                      <h2>Get In Touch</h2>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page randomised
                        words slightly when looking at its layout.{" "}
                      </p>
                    </div>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <div style={{ position: "relative", width: "100%", height: "450px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d856.115253591658!2d75.8437712695975!3d30.873761898407285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a825b79e80449%3A0xa0ad8570d880ce5b!2sGali%20No.%203%2C%20Duggri%2C%20Ludhiana%2C%20Punjab%20141001!5e0!3m2!1sen!2sin!4v1759771145237!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
