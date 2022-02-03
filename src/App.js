import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Detail from "./components/detail";
import Home from "./components/home";

export default function App() {
  
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/detail/:id' element={<Detail/>} />
    </Routes>
  </div>
  );
}
