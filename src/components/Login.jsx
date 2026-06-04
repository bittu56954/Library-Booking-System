import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">

      <div className="left-panel">
        <h1>📚 Library Management System</h1>

        <p>
          Welcome back! Login to access and manage the library resources.
        </p>

        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da" alt="Books" />

        <div className="features">
          <p>📖 Manage Books</p>
          <p>👥 Manage Members</p>
          <p>🔄 Issue / Return Books</p>
          <p>📊 Reports & Statistics</p>
        </div>
      </div>

      <div className="right-panel">

        <div className="login-card">

          <div className="lock-icon">🔒</div>

          <h2>Login</h2>

          <p>Enter your credentials to continue</p>

          <input
            type="text"
            placeholder="👤 Enter your username"
          />

          <input
            type="password"
            placeholder="🔒 Enter your password"
          />

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="/">Forgot Password?</a>
          </div>

          <button>Login</button>

          <div className="divider">
            <span>OR</span>
          </div>

          <p className="register-link">
            Don't have an account?
            <a href="/register"> Register Here</a>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;