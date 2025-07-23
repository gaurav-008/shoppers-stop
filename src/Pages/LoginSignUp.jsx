import React, { useState } from "react";
import './CSS/LoginSignup.css';
import { useNavigate } from "react-router-dom";

export function isUserLoggedIn() {
  return localStorage.getItem('isLoggedIn') === 'true';
}

export const LoginSignUp = () => {
  const [mode, setMode] = useState("login");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);
  const navigate = useNavigate();

  // Determine which video to show
  const showGlass = passwordFocused || (mode === "login" && loginPassword.length > 0) || (mode === "signup" && signupPassword.length > 0);
  const videoSrc = showGlass ? "/model-glass.mp4" : "/model.mp4";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(res => setTimeout(res, 900));
    if (loginEmail === "test@test.com" && loginPassword === "Test@123") {
      setToast("Login successful!");
      localStorage.setItem('isLoggedIn', 'true');
      setTimeout(() => {
        setToast("");
        navigate("/");
      }, 1200);
    } else {
      setToast("Invalid credentials");
      setTimeout(() => setToast(""), 2000);
    }
    setLoading(false);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(res => setTimeout(res, 900));
    setToast("Signup successful!");
    setTimeout(() => setToast(""), 2000);
    setLoading(false);
    setMode("login");
  };

  // Handlers for password field focus/blur
  const handlePasswordFocus = () => setPasswordFocused(true);
  const handlePasswordBlur = () => {
    if ((mode === "login" && loginPassword.length === 0) || (mode === "signup" && signupPassword.length === 0)) {
      setPasswordFocused(false);
    }
  };

  return (
    <div className={`zara-auth-root ${mode}`}> 
      <div className="zara-auth-container">
        <div className={`zara-auth-side zara-auth-image-side ${mode === 'signup' ? 'slide-right' : ''}`}> 
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="zara-auth-video"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, minHeight: 340 }}
          />
        </div>
        <div className={`zara-auth-side zara-auth-form-side ${mode === 'signup' ? 'slide-left' : ''}`}> 
          {mode === "login" ? (
            <form className="zara-auth-form" onSubmit={handleLogin}>
              <h1>Login</h1>
              <input type="email" placeholder="Email address" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} required onFocus={handlePasswordFocus} onBlur={handlePasswordBlur} />
              <button type="submit" disabled={loading}>{loading ? <span className="zara-auth-spinner"></span> : "Login"}</button>
              <div className="zara-auth-switch">Don't have an account? <span onClick={() => setMode("signup")}>Sign Up</span></div>
            </form>
          ) : (
            <form className="zara-auth-form" onSubmit={handleSignup}>
              <h1>Sign Up</h1>
              <input type="text" placeholder="Your name" value={signupName} onChange={e => setSignupName(e.target.value)} required />
              <input type="email" placeholder="Email address" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={signupPassword} onChange={e => setSignupPassword(e.target.value)} required onFocus={handlePasswordFocus} onBlur={handlePasswordBlur} />
              <button type="submit" disabled={loading}>{loading ? <span className="zara-auth-spinner"></span> : "Sign Up"}</button>
              <div className="zara-auth-switch">Already have an account? <span onClick={() => setMode("login")}>Login</span></div>
            </form>
          )}
        </div>
        {toast && <div className="zara-auth-toast">{toast}</div>}
      </div>
    </div>
  );
};
