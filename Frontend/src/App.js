import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import Texteditor from './Components/Texteditor';
import Login from './Components/Login';
import signup from './Components/signup';
import Home from './Components/Home';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        
        {/* Login and Signup routes */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<signup setUser={setUser} />} />

        {/* Private route to handle documents with specific IDs */}
        <Route
          path="/documents/:id"
          element={user ? <Texteditor /> : <Navigate to="/login" replace />}
        />

        {/* Redirect from root to the generated document ID if user is authenticated */}
        <Route
          path="/documents"
          element={user ? <Navigate to={`/documents/${uuidV4()}`} replace /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
