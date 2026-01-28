"use client"; // Ensure this is at the top of the file

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaTaxi,
  FaSuitcase,
  FaMapMarkedAlt,
  FaEnvelope,
} from "react-icons/fa";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalTaxiOutlinedIcon from "@mui/icons-material/LocalTaxiOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeIcon from "@mui/icons-material/Home";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import LuggageIcon from "@mui/icons-material/Luggage";
import MapIcon from "@mui/icons-material/Map";
import EmailIcon from "@mui/icons-material/Email";

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav mobile-only">
      <ul>
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            {pathname === "/" ? <HomeIcon /> : <HomeOutlinedIcon />}
            <span className={pathname === "/" ? "nav-text active" : "nav-text"}>
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/packages"
            className={pathname === "/packages" ? "active" : ""}
          >
            {pathname === "/packages" ? (
              <LuggageIcon />
            ) : (
              <LuggageOutlinedIcon />
            )}
            <span
              className={
                pathname === "/packages" ? "nav-text active" : "nav-text"
              }
            >
              Packages
            </span>
          </Link>
        </li>
        <li>
          <Link href="/taxi" className={pathname === "/taxi" ? "active" : ""}>
            {pathname === "/taxi" ? (
              <LocalTaxiIcon />
            ) : (
              <LocalTaxiOutlinedIcon />
            )}
            <span
              className={pathname === "/taxi" ? "nav-text active" : "nav-text"}
            >
              Taxi
            </span>
          </Link>
        </li>
        {/* <li>
          <Link href="/destinations" className={pathname === '/destinations' ? 'active' : ''}>
            {pathname === '/destinations' ? <MapIcon /> : <MapOutlinedIcon />}
            <span className={pathname === '/destinations' ? 'nav-text active' : 'nav-text'}>Destinations</span>
          </Link>
        </li> */}
        <li>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
          >
            {pathname === "/contact" ? <EmailIcon /> : <EmailOutlinedIcon />}
            <span
              className={
                pathname === "/contact" ? "nav-text active" : "nav-text"
              }
            >
              Contact
            </span>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .bottom-nav {
          z-index: 9999;
          display: flex; /* Use flexbox */
          justify-content: space-around; /* Space evenly */
          background: #333;
          color: white;
          padding: 10px 0;
          position: fixed;
          bottom: 0;
          width: 100%;
          box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
        }
        .bottom-nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex; /* Make the ul a flex container */
          justify-content: space-around; /* Space the items evenly */
          width: 100%; /* Ensure it takes full width */
        }
        .bottom-nav li {
          flex: 1; /* Allow li to grow equally */
          text-align: center;
        }
        .bottom-nav a {
          color: white;
          text-decoration: none;
          display: flex; /* Use flex to align icon and text */
          flex-direction: column; /* Stack the icon above the text */
          align-items: center; /* Center the items */
          padding: 10px 0; /* Add padding for click area */
        }
        .bottom-nav a.active {
          font-weight: bold;
          color: #ffd700; /* Change to your preferred active color */
        }
        .nav-text {
          font-size: 12px; /* Adjust the font size as needed */
        }
      `}</style>
    </nav>
  );
};

export default BottomNav;
