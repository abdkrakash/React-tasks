// 
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/pages/home";
import About from "./Components/pages/about";
import Contact from "./Components/pages/contact";
import ErrorPage from "./Components/pages/error";
import { Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// مكون Navbar
const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <Link to="/" style={{ margin: "0 15px" }}>Home</Link>
      <Link to="/b" style={{ margin: "0 15px" }}>About</Link>
      <Link to="/c" style={{ margin: "0 15px" }}>Contact</Link>
    </nav>
  );
};

// إضافة Navbar لكل صفحة
const HomeWithNavbar = () => (
  <>
    <Navbar />
    <Home />
  </>
);

const AboutWithNavbar = () => (
  <>
    <Navbar />
    <About />
  </>
);

const ContactWithNavbar = () => (
  <>
    <Navbar />
    <Contact />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWithNavbar />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/b",
    element: <AboutWithNavbar />,
  },
  {
    path: "/c",
    element: <ContactWithNavbar />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
