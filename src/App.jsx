import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';

import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Popup from './components/Popup';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Reviews from './components/Reviews';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Register from './pages/Register';
import Profile from './pages/Profile';

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(() => {

    const currentUser =
      localStorage.getItem('currentUser');
  
    return currentUser ? true : false;
  
  });
  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem('bookings');

    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <h1>✨ Beauty Salon ✨</h1>

        <div className="loader"></div>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <div className={darkMode ? 'app dark' : 'app'}>
        <div className="container">
          <Navbar
  isLoggedIn={isLoggedIn}
  setIsLoggedIn={setIsLoggedIn}
/>
          <div className="theme-toggle">
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero setShowForm={setShowForm} />

                <Home bookings={bookings} />
              </>
            }
          />

          <Route
            path="/booking"
            element={<Booking bookings={bookings} setBookings={setBookings} />}
          />
          <Route
  path="/login"
  element={
    <Login
      setIsLoggedIn={setIsLoggedIn}
    />
  }
/>
          <Route
  path="/admin"
  element={
    isLoggedIn ? (
      <Admin bookings={bookings} />
    ) : (
      <Login
        setIsLoggedIn={setIsLoggedIn}
      />
    )
  }
/>
          <Route
  path="/profile"
  element={<Profile />}
/>
          <Route
  path="/register"
  element={<Register />}
/>
        </Routes>
        <Reviews />
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}

        <Footer />

        {showForm && (
          <Popup
            setShowForm={setShowForm}
            bookings={bookings}
            setBookings={setBookings}
            setSuccessMessage={setSuccessMessage}
          />
        )}
      </div>
    </BrowserRouter>
  );
}
