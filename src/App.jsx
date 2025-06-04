import React from "react";
import Home from "./components/Home";
import { Routes, Route,Link, useLocation } from "react-router-dom";
import Details from "./components/Details";
import Create from "./components/Create";
const App = () => {
  const {search,pathname}=useLocation()
  console.log(pathname)
  return (
    <div className="bg-zinc-200 w-screen h-screen flex">
      {(pathname != "/" || search.length > 0) && (
        <Link
          to="/"
          className="text-zinc-700 shadow-zinc-400 rounded-md px-2 mt-4 shadow-sm/100  absolute left-[8%] top-[0.5%] "
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
