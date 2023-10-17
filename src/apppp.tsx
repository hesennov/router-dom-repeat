import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import React, { useState } from "react";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  // const clickFalse: React.MouseEventHandler = () => {
  //   setOpen((notTrue) => !notTrue);
  // };
  return (
    <div>
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      <div className={`dropdown-menu ${open ? "bg-red-500" : "bg-green-500"}`}>
        <ul className="flex gap-20  p-10 text-xl text-gray-100">
          <li>
            <Link to="/" onClick={() => setOpen(!open)}>
              Home
            </Link>
            {open && (
              <div
              //className= "h-20 w-9 bg-slate-700"
              >
                {" "}
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
          </li>
          <li>
            <Link
              to="/Blog"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={() => setOpen(!open)}>
              Contact
            </Link>
            {open && <p>deneme</p>}
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default App;
