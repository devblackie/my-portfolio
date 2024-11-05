import { Navigate, Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/home/Homepage";
import Contact from "../pages/contact/Contact";
import { About } from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/core" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
};
