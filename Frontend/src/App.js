import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import Texteditor from './Components/Texteditor';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const response = await fetch('http://localhost:5000/api/auth/getuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }

      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error fetching user details:', error.message);
      return null;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();
      setUser(userData);
    };

    fetchUser();
  }, []);

  return (
    <Router>
      <NavbarWrapper user={user}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route
            path="/documents/:id"
            element={user ? <Texteditor user={user} /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/documents"
            element={user ? <Navigate to={`/documents/${uuidV4()}`} replace /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </NavbarWrapper>
    </Router>
  );
}

function NavbarWrapper({ children, user }) {
  const location = useLocation();
  const shouldHideNavbar = location.pathname.startsWith('/documents');

  return (
    <>
      {!shouldHideNavbar && <Navbar title="DocuVerse" button1="Login" button2="Signup" />}
      {children}
    </>
  );
}

export default App;
