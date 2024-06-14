import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route index path="/register" element={<Register />} />
      <Route index element={<Login />} />


    </Routes>
  );
}

export default App;
