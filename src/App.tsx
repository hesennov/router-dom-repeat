import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import React, { useState } from "react";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      <div className={`dropdown-menu ${open ? "bg-red-500" : "bg-green-500"}`}>
        <ul className="flex gap-20  p-10 text-xl text-gray-100">
          <li>
            <Link to="/" onClick={() => setOpen(!open)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Blog" onClick={() => setOpen(!open)}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={() => setOpen(!open)} >
              Contact
            </Link>
            <ul>
              {open && "deneme "}
            </ul>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
};
export default App;
