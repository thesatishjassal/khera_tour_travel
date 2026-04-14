import Script from "next/script";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "react-datetime-picker/dist/DateTimePicker.css";
import BottomNav from "components/BottomNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary SEO Meta Tags */}
        <title>
          🚖 One-Way Taxi Service from Jalandhar to Amritsar, Delhi, Chandigarh
          & Shimla | Khera Tour and Travel
        </title>
        <meta
          name="description"
          content="Book reliable one-way taxi service from Jalandhar to Amritsar, Delhi, Chandigarh, and Shimla. 24/7 comfortable rides by Khera Tour and Travel – your trusted taxi service in Punjab."
        />
        <meta
          name="keywords"
          content="Jalandhar taxi service, Jalandhar to Delhi cab, Amritsar taxi booking, Chandigarh taxi, Shimla cab service, one-way taxi Jalandhar, Punjab taxi, airport taxi Jalandhar, car rental Punjab, outstation cab service, taxi near Jalandhar"
        />
        <meta name="author" content="Khera Tour and Travel" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://kheratourandtravel.in" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Jalandhar Taxi Service | One-Way Cabs to Delhi, Amritsar, Chandigarh & Shimla"
        />
        <meta
          property="og:description"
          content="Khera Tour and Travel offers one-way and round-trip taxi service from Jalandhar to Delhi, Amritsar, Chandigarh, and Shimla. Reliable drivers, affordable fares!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kheratourandtravel.in" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jalandhar One-Way Taxi Service | Khera Tour and Travel"
        />
        <meta
          name="twitter:description"
          content="Affordable and safe taxi rides from Jalandhar to Delhi, Amritsar, Chandigarh, and Shimla. Call +91 95010 98488 to book instantly!"
        />
        <meta name="twitter:image" content="/images/og-image.jpg" />

        {/* Local SEO (Geo Tags) */}
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Jalandhar" />
        <meta name="geo.position" content="31.3260;75.5762" />
        <meta name="ICBM" content="31.3260,75.5762" />

        {/* Contact Info */}
        <meta name="contactNumber" content="+91 95010 98488" />
        <meta name="contactEmail" content="kheratoursandtravel@gmail.com" />

        {/* Favicon & Styles */}
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/jquery-ui.min.css" />
        <link rel="stylesheet" href="/css/jquery.timepicker.min.css" />
        <link rel="stylesheet" href="/css/style.css" />

        {/* Structured Data (Schema.org) */}
        <Script id="taxi-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Khera Tour and Travel",
            url: "https://kheratourandtravel.in",
            logo: "https://kheratourandtravel.in/images/logo.png",
            image: "https://kheratourandtravel.in/images/og-image.jpg",
            description:
              "Trusted taxi service from Jalandhar to Delhi, Amritsar, Chandigarh, and Shimla. 24/7 availability with comfortable cars and professional drivers.",
            priceRange: "₹₹",
            telephone: "+91 95010 98488",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Main Market, Jalandhar, Punjab",
              addressLocality: "Jalandhar",
              addressRegion: "Punjab",
              postalCode: "144001",
              addressCountry: "IN",
            },
            areaServed: [
              "Jalandhar",
              "Delhi",
              "Amritsar",
              "Chandigarh",
              "Shimla",
            ],
            serviceType: "One-Way Taxi & Outstation Travel",
            sameAs: [
              "https://www.facebook.com/radheradhetourandtravels",
              "https://www.instagram.com/radheradhetourandtravels",
            ],
          })}
        </Script>
        <Script
          id="google-tag-manager"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SZWJ33HZ26"
        ></Script>

        <Script id="google-analytics-inline">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-SZWJ33HZ26');
  `}
        </Script>

        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17920034708/eP5gCMXt7ZscEJSP-OBC',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17920034708"
        ></script>
        <script>
          {" "}
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17920034708');  `}
        </script>
      </head>

      <body>
        <Header />
        {children}

        {/* Contact Modal */}
        <div
          className="modal fade"
          id="BookTaxi"
          tabIndex="-1"
          aria-labelledby="BookTaxiLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="booktaxiLabel">
                  Contact Details{" "}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-4">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="full-name"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fas fa-phone"></i>
                      </span>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>
                </div>
                <button type="button" className="theme-btn block">
                  Book Your Taxi
                </button>
              </div>
            </div>
          </div>
        </div>

        <BottomNav />
        <Footer />

        {/* External Scripts */}
        <Script src="/js/jquery-3.6.0.min.js"></Script>
        <Script src="/js/modernizr.min.js"></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></Script>
        <Script src="/js/imagesloaded.pkgd.min.js"></Script>
        <Script src="/js/jquery.magnific-popup.min.js"></Script>
        <Script src="/js/jquery.appear.min.js"></Script>
        <Script src="/js/jquery.easing.min.js"></Script>
        <Script src="/js/owl.carousel.min.js"></Script>
        <Script src="/js/counter-up.js"></Script>
        <Script src="/js/wow.min.js"></Script>
        <Script src="/js/main.js"></Script>
      </body>
    </html>
  );
}
