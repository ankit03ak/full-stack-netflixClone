import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    
    login({ email, password }, dispatch, (success, data) => {
      if (success) {
        console.log("Login successful:", data);
      } else {
        console.log("Login failed:", data);
      }
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome back</h1>
          ⚠️ Admin Access Only
          <p>Enter your credentials to access your account</p>
        </div>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <i className="icon-mail">📧</i>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <i className="icon-lock">🔒</i>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className={`login-button ${isFetching ? 'loading' : ''}`}
            disabled={isFetching}
          >
            {isFetching ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="login-footer">
          <p className="signup-text">
            {/* Don't have an account?{' '}
            <a href="/register">Sign up</a> */}
          </p>
          <a href="/forgot-password" className="forgot-password">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}