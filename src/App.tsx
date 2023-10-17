import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const App: React.FC = () => {
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleHomeMenu = () => {
    setHomeMenuOpen((prevOpen) => !prevOpen);
  };

  const closeDropdown = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setHomeMenuOpen(false);
    }
  };

  useEffect(() => {
    // Document üzerindeki tıklamaları dinle
    document.addEventListener("click", closeDropdown);

    // Temizlik işlemi
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      <div
        className={`dropdown-menu ${
          homeMenuOpen ? "bg-red-500" : "bg-green-500"
        }`}
        ref={dropdownRef}
      >
        <ul className="flex gap-20  p-10 text-xl text-gray-100">
          <li>
            <div onClick={toggleHomeMenu}>
              Home
              {homeMenuOpen && (
                <div>
                  <ul>
                    <li className="bg-slate-400 hover:bg-slate-700">
                      Alt Menu 1
                    </li>
                    <li className="bg-slate-400 hover:bg-slate-700">
                      Alt Menu 3
                    </li>
                    <li className="bg-slate-400 hover:bg-slate-700">
                      Alt Menu 2
                    </li>
                    <li className="bg-slate-400 hover:bg-slate-700">
                      Alt Menu 4
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
