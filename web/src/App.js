import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loginpage from './pages/Login';
import Registerpage from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;