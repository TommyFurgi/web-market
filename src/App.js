import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import AddProduct from './AddProduct';
import Login from './Login'

const App = () => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);
  const [username, setUsername] = useState(localStorage.getItem('username') || null);
  const [role, setRole] = useState(localStorage.getItem('role') || null);

  const addProductToDatabase = async (newProduct) => {
    try {
      const response = await fetch('http://localhost:3002/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const addedProduct = await response.json();
      console.log('Dodano produkt do bazy danych:', addedProduct);
    } catch (error) {
      console.error('Wystąpił błąd podczas dodawania produktu do bazy:', error);
    }
  };

  const handleLogin = (token, username, role) => {
    setAuthToken(token);
    setUsername(username);
    setRole(role);
  }; 
  
  const handleLogout = () => {
    console.log('Wylogowano');
    setAuthToken(null);
    setUsername(null);
    setRole(null)
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    localStorage.removeItem('role')
  };

  const isUserLoggedIn = authToken !== null;

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/AddProduct" element={isUserLoggedIn ? <AddProduct onAddProduct={addProductToDatabase} username={username} onLogout={handleLogout} /> : <Navigate to="/" />}/>
          <Route path="/" element={<Home username={username} role={role} onLogout={handleLogout}/>} />
          <Route path="/login" element={!isUserLoggedIn ? <Login onLogin={handleLogin} onLogout={handleLogout}/> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
