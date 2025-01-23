// import React from "react";
// import ReactDOM from "react-dom/client";
// import Home from "./Components/pages/home";
// import About from "./Components/pages/about";
// import Contact from "./Components/pages/contact";
// import ErrorPage from "./Components/pages/error";
// import { Link } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <nav style={{ padding: "10px", background: "#f0f0f0" }}>
//     <Link to="/" style={{ margin: "0 15px" }}>Home</Link>
//     <Link to="/b" style={{ margin: "0 15px" }}>About</Link>
//     <Link to="/c" style={{ margin: "0 15px" }}>Contact</Link>
//   </nav>
//   )
// }
// ;
// const Home = () => (
//   <>
//     <Navbar />
//     <Home />
//   </>
// );

// const About = () => (
//   <>
//     <Navbar />
//     <About />
//   </>
// );

// const Contact = () => (
//   <>
//     <Navbar />
//     <Contact />
//   </>
// );
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomeWithNavbar />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/b",
//     element: <about />,
//   },
//   {
//     path: "/c",
//     element: <contact />,
//   },
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);






import React from "react";
import ReactDOM from "react-dom/client";
import HO from "./Components/pages/home";
import Ab from "./Components/pages/about";
import Co from "./Components/pages/contact";
import ErrorPage from "./Components/pages/error";
import { Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "lightblue" }}>
      <Link to="/" style={{ margin: "0 15px", textDecoration:"non"}}>Home</Link>
      <Link to="/b" style={{ margin: "0 15px", textDecoration:"non" }}>About</Link>
      <Link to="/c" style={{ margin: "0 15px" , textDecoration:"non" }}>Contact</Link>
    </nav>
  );
};

const Honav = () => (
  <>
    <Navbar />
    <HO />
  </>
);

const Abnav = () => (
  <>
    <Navbar />
    <Ab />
  </>
);

const Conav = () => (
  <>
    <Navbar />
    <Co />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Honav />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/b",
    element: <Abnav />,
  },
  {
    path: "/c",
    element: <Conav />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);




