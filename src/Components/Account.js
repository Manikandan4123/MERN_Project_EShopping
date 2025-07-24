import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Account({ handleClose }) {
  const [isLogin, setIsLogin] = useState(true); // Toggle login/signup
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(true); // Show login/signup form or logout

  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setIsLoggedIn(true);
      setShowForm(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setMessage('Username and password are required');
      return;
    }

    try {
      const url = isLogin ? 'http://localhost:5000/login' : 'http://localhost:5000/signup';
      const res = await axios.post(url, { username, password });

      setMessage(res.data.message);

      if (res.data.message === 'Login successful') {
        localStorage.setItem('username', res.data.username); // Save Username to Local Storage
        setIsLoggedIn(true);
        setShowForm(false);
      }

      if (res.data.message === 'Account created successfully') {
        setIsLogin(true); // switch to login view
        setUsername('');
        setPassword('');
        setMessage('Signup successful! Please login.');
      }

    } catch (err) {
      setMessage(err.response?.data?.message || 'Server error');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setShowForm(true);
    setMessage('');
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      {!showForm ? ( 
        <>
          <h2>Welcome, {localStorage.getItem('username')}</h2>
          <button onClick={handleLogout} style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h2 style={{textAlign:'center', paddingBottom:'20px', fontWeight:'bold'}}>{isLogin ? 'Login' : 'Sign Up'}</h2>

          <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:'column',alignItems:'center' }}>
            <input
              style={{
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '16px',
              width: '100%'}}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /><br /><br />

            <input
              style={{
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '16px',
              width: '100%'}}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br /><br />

            <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer',border: '1px solid #ccc' }}>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <p style={{ marginTop: '10px', cursor: 'pointer', color: 'blue' }}
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage('');
              setUsername('');
              setPassword('');
            }}>
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </p>

          <p style={{ color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>
        </>
      )}
    </div>
  );
}
