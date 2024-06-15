import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { useFirebase } from './context/Firebase';
import { Navigate } from 'react-router-dom';
import Details from './pages/Details';
import Display from './pages/Display';
import { messaging } from './context/Firebase';
import { getToken } from 'firebase/messaging';

function App() {

  const firebase = useFirebase();

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, { vapidKey: 'BHdPduqay25OPKUDx3jPnICmZGkaVI_03luHZqAWsh_msChHb_7cdswGtnmMdtepb8De2pNRTws9wWHqAQ_DHaA' });
      console.log(token);
    }
    else if (permission === 'denied') {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
  }, [])

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
