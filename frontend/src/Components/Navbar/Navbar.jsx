import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = () => {
    setShowLoginForm(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError('Password too short. It must be at least 8 characters.');
      return;
    }
    if (!/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
      setError('Password too easy. It must include uppercase, number, and special character.');
      return;
    }

    // Placeholder for actual login logic
    if (email && password) {
      setIsLoggedIn(true);
      setShowLoginForm(false);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className='navbar-menu'>
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</li>
        <li onClick={() => setMenu("categories")} className={menu === "categories" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu("products")} className={menu === "products" ? "active" : ""}>Products</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact-us</li>
      </ul>

      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className='dot'></div>
        </div>
        {isLoggedIn ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button onClick={handleSignIn}>Sign In</button>
        )}
      </div>

      {showLoginForm && (
        <div className='login-form-container'>
          <form className='login-form' onSubmit={handleLogin}>
            <h3>Login</h3>
            {error && <div className='error'>{error}</div>}
            <div className='inputBox'>
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='inputBox'>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type='submit' className='btn'>Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Navbar;
