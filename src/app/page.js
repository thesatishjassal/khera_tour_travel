import PersonalDeatils from "components/PersonalDetails";
import TripTypeSelector from "components/TripTypeSelector";

export default function Home() {
  return (
    <>
      <div className="preloader" style={{ display: "none" }}>
        <div className="loader-ripple">
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="sidebar-popup">
        <div className="sidebar-wrapper">
          <div className="sidebar-content">
            <button type="button" className="close-sidebar-popup">
              <i className="fa fa-xmark"></i>
            </button>
            <div className="sidebar-logo">
              <img src="../Images/logo.png" alt="" />
            </div>
            <div className="sidebar-about">
              <h4>About Us</h4>
              <p>
                There are many variations of passages available sure there
                majority have suffered alteration in some form by injected
                humour or randomised words which don't look even slightly
                believable.
              </p>
            </div>
            <div className="sidebar-contact">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <h6>Email</h6>
                  <a href="mailto:radheradhetourandtravells@gmail.com">
                    <i className="fa fa-envelope"></i>
                    radheradhetourandtravells@gmail.com
                  </a>
                </li>
                <li>
                  <h6>Phone</h6>
                  <a href="tel:+21236547898">
                    <i className="fa fa-phone"></i>+91 88476 90213
                  </a>
                </li>
                <li>
                  <h6>Address</h6>
                  <div>
                    <strong>Arora Tour & Travels</strong>
                    <br />
                    Near Super Car Wash, Cargo Honda, Tata Motors,
                    <br />
                    Gopal Nagar, Jalandhar, Punjab - 144008
                  </div>
                </li>
              </ul>
            </div>
            <div className="sidebar-social">
              <h4>Follow Us</h4>
              <a href="tel:+91 88476 90213">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="tel:+91 88476 90213">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="tel:+91 88476 90213">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="tel:+91 88476 90213">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="main">
        <div
          className="hero-banner bg "
          style={{ backgroundImage: "url(./Images/hero-banner.jpg)" }}
        >
          <div className="book-taxi">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mx-auto">
                  <TripTypeSelector />
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <section
          className="popular-destinations"
          style={{ padding: "50px 0", backgroundColor: "#f5f5f5" }}
        >
          <div className="container">
            <div className="inline-flex">
              <div className="col">
                <div className="site-heading text-left">
                  <h2 className="site-title">Popular destinations</h2>
                  <div className="heading-divider"></div>
                </div>
              </div>
              <div className="col">
                <div className="site-heading text-right">
                  <a href="/destinations" className="explore-link">
                    Explore all &nbsp;{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="destination-inline">
              <div
                className="destination"
                style={{ backgroundImage: "url(./Images/shimla.jpg)" }}
              >
                <div className="destination-info">
                  <h3>Shimla</h3>
                  <a
                    href="tel:+91 88476 90213"
                    className="call-now-link white-color"
                  >
                    Enquire Now &nbsp;{" "}
                    <i className="fa-solid fa-phone-flip"></i>
                  </a>
                </div>
              </div>

              <div
                className="destination"
                style={{ backgroundImage: "url(./Images/manali.webp)" }}
              >
                <div className="destination-info">
                  <h3>Manali</h3>
                  <a
                    href="tel:+91 88476 90213"
                    className="call-now-link white-color"
                  >
                    Enquire Now &nbsp;{" "}
                    <i className="fa-solid fa-phone-flip"></i>
                  </a>
                </div>
              </div>

              <div
                className="destination"
                style={{ backgroundImage: "url(./Images/amritsar.jpg)" }}
              >
                <div className="destination-info">
                  <h3>Amritsar</h3>
                  <a
                    href="tel:+91 88476 90213"
                    className="call-now-link white-color"
                  >
                    Enquire Now &nbsp;{" "}
                    <i className="fa-solid fa-phone-flip"></i>
                  </a>
                </div>
              </div>

              <div
                className="destination"
                style={{ backgroundImage: "url(./Images/mcLeodganj.jpg)" }}
              >
                <div className="destination-info">
                  <h3>McLeodganj</h3>
                  <a
                    href="tel:+91 88476 90213"
                    className="call-now-link white-color"
                  >
                    Enquire Now &nbsp;{" "}
                    <i className="fa-solid fa-phone-flip"></i>
                  </a>
                </div>
              </div>

              <div
                className="destination"
                style={{ backgroundImage: "url(./Images/Chandigarh.jpg)" }}
              >
                <div className="destination-info">
                  <h3>Chandigarh</h3>
                  <a
                    href="tel:+91 88476 90213"
                    className="call-now-link white-color"
                  >
                    Enquire Now &nbsp;{" "}
                    <i className="fa-solid fa-phone-flip"></i>
                  </a>
                </div>
              </div>

              <div
                className="destination"
                style={{ backgroundImage: "url(./Images/Leh-Ladakh.jpeg)" }}
              >
                <div className="destination-info">
                  <h3> Leh & Ladakh</h3>
                  <a
                    href="tel:+91 88476 90213"
                    className="call-now-link white-color"
                  >
                    Enquire Now &nbsp;{" "}
                    <i className="fa-solid fa-phone-flip"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="taxi-fare-one py-120">
          <div className="container">
            <div className="inline-flex">
              <div className="col">
                <div className="site-heading text-left">
                  <h2 className="site-title">Our best cars</h2>
                  <div className="heading-divider"></div>
                </div>
              </div>
              <div className="col">
                <div className="site-heading text-right">
                  <a href="/taxi" className="explore-link">
                    Explore all &nbsp;{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="single-taxi-fare-one thm-base-bg hvr-float-shadow">
                  <div className="icon-block">
                    <i className="conexi-icon-taxi"></i>
                    <img
                      src="./Images/Innova-crysta.png"
                      alt="Jalandhar to Delhi One Way Taxi"
                    />
                  </div>
                  <div className="top-block">
                    <div className="text-block">
                      <h3>Toyota Innova Crysta</h3>
                      <p>6+1 (7-seater) / 7+1 (8-seater)</p>
                      <a href="tel:+91 88476 90213" className="call-now-link">
                        Enquire Now &nbsp;{" "}
                        <i className="fa-solid fa-phone-flip"></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="single-taxi-fare-one thm-base-bg hvr-float-shadow">
                  <div className="icon-block">
                    <i className="conexi-icon-taxi"></i>
                    <img
                      src="./Images/Toyota-fortune.png"
                      alt="Shimla One Way Taxi Service"
                    />
                  </div>
                  <div className="top-block">
                    <div className="text-block">
                      <h3>Toyota Fortuner</h3>
                      <p>6+1 (7-seater)</p>
                      <a href="tel:+91 88476 90213" className="call-now-link">
                        Enquire Now &nbsp;{" "}
                        <i className="fa-solid fa-phone-flip"></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="single-taxi-fare-one thm-base-bg hvr-float-shadow">
                  <div className="icon-block">
                    <i className="conexi-icon-taxi"></i>
                    <img
                      src="./Images/tempo-traveller-tempo-traveller-png.png"
                      alt="One Way Taxi from Amritsar to Delhi"
                    />
                  </div>
                  <div className="top-block">
                    <div className="text-block">
                      <h3>Force Tempo Traveller</h3>
                      <p>12+1 (13-seater)</p>
                      <a href="tel:+91 88476 90213" className="call-now-link">
                        Enquire Now &nbsp;{" "}
                        <i className="fa-solid fa-phone-flip"></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="single-taxi-fare-one thm-base-bg hvr-float-shadow">
                  <div className="icon-block">
                    <i className="conexi-icon-taxi"></i>
                    <img
                      src="./Images/Dizar.png"
                      alt="Amritsar to Chandigarh Round Trip Taxi"
                    />
                  </div>
                  <div className="top-block">
                    <div className="text-block">
                      <h3>Maruti Suzuki Dzire</h3>
                      <p>4+1 (5-seater)</p>
                      <a href="tel:+91 88476 90213" className="call-now-link">
                        Enquire Now &nbsp;{" "}
                        <i className="fa-solid fa-phone-flip"></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="single-taxi-fare-one thm-base-bg hvr-float-shadow">
                  <div className="icon-block">
                    <i className="conexi-icon-taxi"></i>
                    <img
                      src="./Images/force-urbania.png"
                      alt="Delhi One Way Taxi from Chandigarh"
                    />
                  </div>
                  <div className="top-block">
                    <div className="text-block">
                      <h3>Force Urbania</h3>
                      <p>17+12 (29-seater)</p>
                      <a href="tel:+91 88476 90213" className="call-now-link">
                        Enquire Now &nbsp;{" "}
                        <i className="fa-solid fa-phone-flip"></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="single-taxi-fare-one thm-base-bg hvr-float-shadow">
                  <div className="icon-block">
                    <i className="conexi-icon-taxi"></i>
                    <img
                      src="./Images/Ertiga.png"
                      alt="Jalandhar to Chandigarh One Way Taxi Service"
                    />
                  </div>
                  <div className="top-block">
                    <div className="text-block">
                      <h3>Maruti Suzuki Ertiga</h3>
                      <p>6+1 (7-seater)</p>
                      <a href="tel:+91 88476 90213" className="call-now-link">
                        Enquire Now &nbsp;{" "}
                        <i className="fa-solid fa-phone-flip"></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="cta-area mt-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 text-center text-lg-start">
                <div className="cta-text cta-divider">
                  <h2>Book Your Trip Quick, Easy, and Affordable</h2>
                </div>
              </div>
              <div className="col-lg-5 text-center text-lg-end">
                <div className="cta-btn">
                  <a href="tel:+91 88476 90213" className="theme-btn">
                    Book Your Cab<i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-area bg pt-120">
          <div className="container mini-container">
            <div className="inline-flex">
              <div className="col">
                <div className="site-heading text-left">
                  <h2 className="site-title">Tour Packages</h2>
                  <div className="heading-divider"></div>
                </div>
              </div>
              <div className="col">
                <div className="site-heading text-right">
                  <a href="/packages" className="explore-link">
                    Explore all &nbsp;{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid-container">
              <div className="grid-item">
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <div className="service-img">
                    <img
                      src="./Images/weekend-getaway.jpeg"
                      alt="Weekend Getaway Packages"
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Weekend</h3>
                    <p className="service-text">
                      Enjoy stress-free weekend trips with our cab services to
                      popular destinations like Agra and Shimla.
                    </p>
                    <a href="tel:+91 88476 90213" className="call-now-link">
                      Enquire Now{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid-item">
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay=".50s"
                >
                  <div className="service-img">
                    <img
                      src="./Images/airport-transfer.jpeg"
                      alt="Airport Transfer Packages"
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Airport Transfer</h3>
                    <p className="service-text">
                      Experience seamless airport transfers with our reliable
                      cab services to and from major airports.
                    </p>
                    <a href="tel:+91 88476 90213" className="call-now-link">
                      Enquire Now{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid-item">
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay=".75s"
                >
                  <div className="service-img">
                    <img
                      src="https://media.istockphoto.com/id/506598655/photo/couple-on-a-beach-jetty-at-maldives.jpg?s=612x612&w=0&k=20&c=UJha8UU51ThBgH151slXPie_fCsfvnQWYxnLOcRmUkw="
                      alt="Honeymoon Packages"
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Honeymoon</h3>
                    <p className="service-text">
                      Celebrate your love with romantic cab services to dreamy
                      destinations like Manali and Ooty.
                    </p>
                    <a href="tel:+91 88476 90213" className="call-now-link">
                      Enquire Now{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid-item">
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <div className="service-img">
                    <img
                      src="./Images/family-vacation.jpg"
                      alt="Family Vacation Packages"
                    />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Family Vacation</h3>
                    <p className="service-text">
                      Plan unforgettable family trips with our kid-friendly cab
                      services to exciting destinations.
                    </p>
                    <a href="tel:+91 88476 90213" className="call-now-link">
                      Enquire Now{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-area bg py-120">
          <div className="container mini-container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <h2 className="site-title">All Routes</h2>
                  <div className="heading-divider"></div>
                </div>
              </div>
            </div>

<ul className="cab-list">
  {/* Ludhiana outgoing */}
  {[
    { city: "Delhi", description: "Explore India Gate, Red Fort, and the famous Chandni Chowk street food." },
    { city: "Chandigarh", description: "Visit Rock Garden, Sukhna Lake, and enjoy the planned city vibe." },
    { city: "Jammu", description: "See Raghunath Temple and enjoy local delicacies." },
    { city: "Katra", description: "Gateway to Vaishno Devi, a major pilgrimage site." },
    { city: "Manali", description: "Famous for snow-capped mountains, adventure sports, and scenic beauty." },
    { city: "Agra", description: "Home of the Taj Mahal, Agra Fort, and Mughal history." },
    { city: "Dehradun", description: "Explore Robber’s Cave, Sahastradhara, and scenic hills." },
    { city: "Rishikesh", description: "Yoga capital of the world, river rafting, and spiritual vibe." },
    { city: "Shimla", description: "Hills, Mall Road, Jakhoo Temple, and beautiful sunsets." },
    { city: "Mussoorie", description: "Scenic hill station with Mall Road, Kempty Falls, and mountain views." },
    { city: "Haridwar", description: "Famous for Ganga Aarti, temples, and spiritual experience." },
    { city: "Amritsar", description: "Visit Golden Temple, Wagah Border, and Punjabi cuisine." },
    { city: "Dharamsala", description: "Hills, Tibetan culture, and Dalai Lama Temple." },
    { city: "Dalhousie", description: "Beautiful hill station with colonial architecture and nature walks." },
    { city: "McLeod Ganj", description: "Spiritual Tibetan hub with monasteries and cafes." },
    { city: "Vaishno Devi", description: "Major pilgrimage destination in the Trikuta Mountains." },
    { city: "Kullu", description: "Known for adventure sports, rivers, and scenic beauty." },
    { city: "Kasol", description: "Peaceful village, trekking, and Israeli cuisine." },
    { city: "Kufri", description: "Small hill resort with skiing and mountain views." },
    { city: "Nainital", description: "Famous lake, boating, and scenic hills." },
  ].map((item, idx) => (
    <li key={`ludhiana-${idx}`} className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-semibold mb-1">
          Ludhiana → {item.city}
        </h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
      </div>
      <a
        href="tel:+918847690213"
        className="mt-2 bg-blue-600 text-sm hover:bg-blue-700"
      >
        Call Now
      </a>
    </li>
  ))}

  {/* Delhi outgoing */}
  {[
    { city: "Shimla", description: "Hills, Mall Road, Jakhoo Temple, and beautiful sunsets." },
    { city: "Manali", description: "Snow-capped mountains, adventure sports, and scenic beauty." },
    { city: "Agra", description: "Taj Mahal, Agra Fort, and Mughal history." },
    { city: "Haridwar", description: "Ganga Aarti, temples, and spiritual experience." },
    { city: "Rishikesh", description: "Yoga, river rafting, and peaceful environment." },
    { city: "Dehradun", description: "Robber’s Cave, Sahastradhara, and scenic hills." },
    { city: "Amritsar", description: "Golden Temple, Wagah Border, Punjabi food." },
    { city: "Chandigarh", description: "Rock Garden, Sukhna Lake, and modern city." },
    { city: "Ludhiana", description: "Industrial city with markets and local cuisine." },
    { city: "Mussoorie", description: "Hills, Kempty Falls, and mountain views." },
    { city: "Nainital", description: "Famous lake, boating, and scenic beauty." },
    { city: "Dalhousie", description: "Colonial architecture and natural beauty." },
    { city: "Dharamsala", description: "Tibetan culture and Dalai Lama Temple." },
    { city: "Jammu", description: "Raghunath Temple and local delicacies." },
    { city: "Katra", description: "Gateway to Vaishno Devi pilgrimage site." },
    { city: "McLeod Ganj", description: "Spiritual Tibetan hub with monasteries and cafes." },
    { city: "Kullu", description: "Adventure sports, rivers, and scenic beauty." },
    { city: "Kasol", description: "Peaceful village, trekking, and Israeli cafes." },
    { city: "Vaishno Devi", description: "Pilgrimage destination in Trikuta Mountains." },
    { city: "Kufri", description: "Skiing and hill station views." },
  ].map((item, idx) => (
    <li key={`delhi-${idx}`} className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-semibold mb-1">
          Delhi → {item.city}
        </h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
      </div>;
      <a
        href="tel:+918847690213"
        className="mt-2 inline-block bg-red-600 text-sm font-medium hover:bg-red-700"
      >
        Call Now
      </a>
    </li>
  ))}

  {/* Amritsar outgoing */}
  {[
    { city: "Delhi", description: "India Gate, Red Fort, and Chandni Chowk." },
    { city: "Chandigarh", description: "Rock Garden, Sukhna Lake, and planned city." },
    { city: "Ludhiana", description: "Markets, food, and industrial hub." },
    { city: "Jammu", description: "Raghunath Temple and local food." },
    { city: "Katra", description: "Vaishno Devi pilgrimage." },
    { city: "Manali", description: "Snow, adventure sports, and hills." },
    { city: "Dharamsala", description: "Tibetan culture and Dalai Lama Temple." },
    { city: "Dalhousie", description: "Hill station with colonial architecture." },
    { city: "Shimla", description: "Mall Road, Jakhoo Temple, and hills." },
    { city: "Kullu", description: "Adventure sports and scenic rivers." },
    { city: "Kasol", description: "Trekking and peaceful village vibes." },
    { city: "Kufri", description: "Small hill resort with skiing." },
    { city: "McLeod Ganj", description: "Tibetan spiritual hub and cafes." },
    { city: "Agra", description: "Taj Mahal, Agra Fort." },
    { city: "Haridwar", description: "Ganga Aarti and temples." },
    { city: "Rishikesh", description: "Yoga and river rafting." },
    { city: "Vaishno Devi", description: "Pilgrimage in Trikuta Mountains." },
    { city: "Dehradun", description: "Robber’s Cave and Sahastradhara." },
    { city: "Mussoorie", description: "Hills, Kempty Falls, scenic views." },
    { city: "Nainital", description: "Famous lake and boating." },
  ].map((item, idx) => (
    <li key={`amritsar-${idx}`} className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-semibold mb-1">
          Amritsar → {item.city}
        </h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
      </div>
      <a
        href="tel:+918847690213"
        className="mt-2 inline-block bg-red-600 text-sm font-medium hover:bg-red-700"
      >
        Call Now
      </a>
    </li>
  ))}

  {/* Chandigarh outgoing */}
  {[
    { city: "Delhi", description: "India Gate, Red Fort, Chandni Chowk." },
    { city: "Ludhiana", description: "Markets, food, and industrial hub." },
    { city: "Amritsar", description: "Golden Temple and Wagah Border." },
    { city: "Jammu", description: "Raghunath Temple and local delicacies." },
    { city: "Katra", description: "Vaishno Devi pilgrimage." },
    { city: "Manali", description: "Snowy mountains, adventure sports." },
    { city: "Shimla", description: "Mall Road, Jakhoo Temple, and hills." },
    { city: "Kullu", description: "Adventure sports, rivers, scenic views." },
    { city: "Kasol", description: "Trekking and peaceful village." },
    { city: "Kufri", description: "Hill resort with skiing." },
    { city: "McLeod Ganj", description: "Tibetan hub with cafes." },
    { city: "Dharamsala", description: "Dalai Lama Temple and Tibetan culture." },
    { city: "Dalhousie", description: "Colonial architecture, scenic walks." },
    { city: "Mussoorie", description: "Hills, Kempty Falls." },
    { city: "Rishikesh", description: "Yoga and river rafting." },
    { city: "Haridwar", description: "Ganga Aarti and temples." },
    { city: "Agra", description: "Taj Mahal, Agra Fort." },
    { city: "Vaishno Devi", description: "Pilgrimage in Trikuta Mountains." },
    { city: "Dehradun", description: "Robber’s Cave and Sahastradhara." },
    { city: "Nainital", description: "Lake, boating, and hills." },
  ].map((item, idx) => (
    <li key={`chandigarh-${idx}`} className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-semibold mb-1">
          Chandigarh → {item.city}
        </h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
      </div>
      <a
        href="tel:+918847690213"
        className="mt-2 inline-block bg-red-600 text-sm font-medium hover:bg-red-700"
      >
        Call Now
      </a>
    </li>
  ))}
</ul>

          </div>
        </div>
        <div className="feature-area feature-bg py-120">
          <div className="container">
            <div className="row inline-responsive">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <h2 className="site-title text-white">Why Choose Us</h2>
                  <div className="heading-divider"></div>
                </div>
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-item">
                <div
                  className="feature-item wow fadeInUp"
                  data-wow-delay=".25s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.75s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="feature-icon">
                    <img src="../Images/taxi-safety.svg" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Safety Guarantee</h4>
                    <p>Your safety is our top priority at all times.</p>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div
                  className="feature-item wow fadeInDown"
                  data-wow-delay=".25s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="feature-icon">
                    <img src="../Images/pickup.svg" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Fat Pickup</h4>
                    <p>
                      We ensure quick and efficient pickups for all services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div
                  className="feature-item wow fadeInUp"
                  data-wow-delay=".25s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.75s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="feature-icon">
                    <img src="../Images/money.svg" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Affordable Rate</h4>
                    <p>
                      Providing top-notch service at a price you can afford.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div
                  className="feature-item wow fadeInDown"
                  data-wow-delay=".25s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="feature-icon">
                    <img src="../Images/support.svg" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>24/7 Support</h4>
                    <p>
                      We are always available to assist you anytime, day or
                      night.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <h2 className="site-title">Faq's</h2>
                  <div className="heading-divider"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-right">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span>
                            <i className="fa fa-question"></i>
                          </span>{" "}
                          How Do I Submit an Inquiry?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          To submit an inquiry, simply fill out the contact form
                          on our website. Provide your details and travel
                          preferences, and our team will get in touch with you
                          shortly.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span>
                            <i className="fa fa-question"></i>
                          </span>{" "}
                          What Happens After I Fill Out the Form?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Once you submit the form, our team will review your
                          information and contact you via phone to discuss your
                          travel needs in detail. We aim to respond within 24
                          hours.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span>
                            <i className="fa fa-question"></i>
                          </span>{" "}
                          What Payment Gateway Do You Support?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          We offer a variety of secure payment options,
                          including credit/debit cards and online wallets,
                          ensuring a smooth transaction process for your
                          bookings.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          <span>
                            <i className="fa fa-question"></i>
                          </span>{" "}
                          How Can I Cancel My Request?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          To cancel your request, please contact our customer
                          support team. We’ll guide you through the cancellation
                          process.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive"
                      >
                        <span>
                          <i className="fa fa-question"></i>
                        </span>{" "}
                        How Long Does A Booking Take?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Booking a trip usually takes just a few minutes. Our
                        streamlined process allows you to select your route
                        quickly, ensuring a hassle-free experience.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        <span>
                          <i className="fa fa-question"></i>
                        </span>{" "}
                        Can I Ask Questions During the Follow-Up Call?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Yes! Our team is here to answer any questions you may
                        have about your travel plans. Feel free to ask during
                        the call.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        <span>
                          <i className="fa fa-question"></i>
                        </span>{" "}
                        How Do You Protect My Information?
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        We take your privacy seriously. Your information is
                        securely stored and used only for the purpose of
                        assisting with your travel inquiries.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        <span>
                          <i className="fa fa-question"></i>
                        </span>{" "}
                        What If I Need More Time to Decide?
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEight"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        No problem! You can take your time to make a decision
                        after our call. We’re here to assist you whenever you’re
                        ready.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 text-center text-lg-start">
                <div className="cta-text cta-divider">
                  <h2>Book Your Trip Quick, Easy, and Affordable</h2>
                </div>
              </div>
              <div className="col-lg-5 text-center text-lg-end">
                <div className="cta-btn">
                  <a href="tel:+91 88476 90213" className="theme-btn">
                    Book Your Cab<i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <PersonalDeatils />
    </>
  );
}
