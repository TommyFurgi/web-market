import React, { useRef, useState } from 'react';
import axios from 'axios';
import Menu from './Menu';
import Title from './Title';
import { useNavigate } from 'react-router-dom';
import './style/Login.css';

const Login = ({ onLogin, onLogout }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
  
  
    try {
      const response = await axios.post('http://localhost:3001/api/login', { username, password });
  
      const token = response.data.token;
      const role = response.data.role;
  
      localStorage.setItem('authToken', token);
      localStorage.setItem('username', username);
      localStorage.setItem('role', role);
  
      onLogin(token, username, role);
      navigate('/');
    } catch (error) {
      console.error('Error during login:', error);
      setError('Invalid credentials. Please try again.');
      console.log('Error response:', error.response);
    }
  };
  

  return (
    <div className="home-container">
      <Menu onLogout={onLogout} searchInput={null}/>
      <div className='main'>
        <div className='title-container'>
          <Title />
        </div>
        <div id="outercontainer">
          <div className="container">
            <h2 style={{ marginBottom: '-20px'}} id="title">Login</h2>
            <div style={{ marginBottom: '-20px'}} className='form'>
              <div className='form-desc'>
                <label>Username:</label>
                <br />
                <br />
                <br />
                <label>Password:</label>
              </div>
              <div>
                <input type="text" ref={usernameRef} /> 
                <br />
                <input type="password" ref={passwordRef} />
              </div>
            </div>
            {error &&  <p style={{ marginBottom: '-10px'}} className="error-message">{error}</p>}
            <div className="buttonslogin">
              <button onClick={handleLogin} className='login-button'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;