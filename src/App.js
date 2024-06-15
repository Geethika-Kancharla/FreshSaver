import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { useFirebase } from './context/Firebase';
import { Navigate } from 'react-router-dom';
import Details from './pages/Details';
import Display from './pages/Display';



function App() {

  const firebase = useFirebase();

  const currentUser = firebase.isLoggedIn;

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/"></Navigate>;
  }

  return (
    <Routes>
      <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
      <Route index path="/register" element={<Register />} />
      <Route index path="/details" element={<Details />} />
      <Route index path="/display" element={<Display />} />
      <Route index element={<Login />} />
    </Routes>
  );
}

export default App;
