import React, {useEffect} from "react";
import { Helmet } from "react-helmet";
import { Routes, Route, useLocation } from 'react-router-dom';

// Screens
import Landing from "./screens/Landing.jsx";
import AboutUs from "./screens/AboutUs.jsx";
import WhyUs from "./screens/WhyUs.jsx";
import Brands from "./screens/Brands.jsx";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import Contact from "./screens/Contact.jsx";

export default function App() {

  const location = useLocation();
  
  useEffect(() => {
    document.title = location.pathname;
    switch (location.pathname) {
      case '/':
        document.title = "Home"
        break;
      case '/about':
        document.title = "About Us"
        break;
      case '/whyus':
        document.title = "Why Us"
        break;
      case '/brands':
        document.title = "Brands"
        break;
      case '/contact':
        document.title = "Contact"
        break;
      default:
        document.title = "Home"
        break;
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <TopNavbar />
      <Routes>
          <Route path="/" element={<Landing />} title="Home" />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>
    </>
  );
}

