import React from 'react'
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import Details from './components/Details';
const App = () => {
  return (
    <div className="bg-zinc-200 w-full h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App
