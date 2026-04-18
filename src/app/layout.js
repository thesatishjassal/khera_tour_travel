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

        <link rel="canonical" href="https://kheratourandtravel.in" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />

        {/* Styles */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17920034708"
        ></script>
        <script>
          {" "}
          {` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-17920034708');   `}
        </script>

        {/* ✅ Schema */}
        <Script id="taxi-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Khera Tour and Travel",
            url: "https://kheratourandtravel.in",
          })}
        </Script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17920034708"
        ></script>
        <script>
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17920034708');`}
        </script>
        <script>
          {` gtag('event', 'conversion', {'send_to': 'AW-17920034708/L5EsCO7N75scEJSP-OBC'});  `}
        </script>

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
        <script>
          {" "}
          {` gtag('event', 'conversion', {'send_to': 'AW-17920034708/V4LuCM7v1J0cEJSP-OBC'});   `}{" "}
        </script>
        <script
          async
          custom-element="amp-analytics"
          src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
        ></script>
        <amp-analytics type="gtag" data-credentials="include">
          {" "}
          <script type="application/json">
            {" "}
            {`{ "vars": { "gtag_id": "AW-17920034708", "config": { "AW-17920034708": { "groups": "default" } } }, "triggers": { } }  `}
          </script>{" "}
        </amp-analytics>
      </head>

      <body>
        <Header />
        {children}

        <BottomNav />
        <Footer />

        {/* External Scripts */}
        <Script src="/js/jquery-3.6.0.min.js" />
        <Script src="/js/modernizr.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />
        <Script src="/js/owl.carousel.min.js" />
        <Script src="/js/main.js" />
      </body>
    </html>
  );
}
