

"use client";

import { useState } from "react";

export default function CryptoLogin() {
  const [email, setEmail] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = async () => { 
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&family=JetBrains+Mono:wght@400;500&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --bg: #07090f;
          --sf: #061410;
          --sf2: #111827;
          --sf3: #053421;
          --bd: #ffffff12;
          --bd2: #ffffff24;
          --tx: #d1d6e5;
          --tx2: #d1d6e5;
          --tx3: #fdf7f7;
          --gr: #2dd4a0;
          --grbg: #2dd4a01a;
          --grd: #2dd4a047;
          --glt: #00c96e;
        }

        body {
          background: var(--bg);
          min-height: 100vh;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: var(--bg);
          position: relative;
        }

        .login-wrapper {
          display: flex;
          max-width: 1100px;
          width: 100%;
          background: #07a658;
          border-radius: 32px;
          border: 1px solid var(--bd);
          overflow: hidden;
          animation: fadeUp 0.6s ease-out;
        }

        /* Left Panel - Image */
        .login-preview {
            flex: 1;
    background-image: url(https://veltimpera.com/images/new/ert4554.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
        }

        /* Right Panel - Form */
        .login-form-panel {
          flex: 1;
          background: var(--sf2);
          padding: 48px 44px;
        }

        .form-header {
          margin-bottom: 36px;
        }

        .form-title {
          font-size: 34px;
          font-weight: 800;
          background: linear-gradient(135deg, #fff 0%, var(--gr) 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }

        .form-subtitle {
          color: var(--tx2);
          font-size: 14px;
          opacity: 0.7;
        }

        .input-group {
          margin-bottom: 22px;
        }

        .input-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .label-text {
          font-size: 12px;
          font-weight: 600;
          color: var(--tx);
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .forgot-link {
          font-size: 12px;
          color: var(--gr);
          text-decoration: none;
        }

        .forgot-link:hover {
          text-decoration: underline;
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--sf);
          border: 1.5px solid var(--bd);
          border-radius: 16px;
          padding: 0 18px;
          height: 54px;
          transition: all 0.2s;
        }

        .input-wrapper.focused {
          border-color: var(--gr);
          box-shadow: 0 0 0 3px var(--grbg);
        }

        .input-icon {
          width: 18px;
          height: 18px;
          color: var(--gr);
        }

        .input-field {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--tx3);
          font-size: 14px;
          font-family: 'Inter', sans-serif;
        }

        .input-field::placeholder {
          color: var(--tx2);
          opacity: 0.4;
        }

        .toggle-password {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--tx2);
          display: flex;
        }

        .toggle-password:hover {
          color: var(--gr);
        }

        .submit-btn {
          width: 100%;
          height: 54px;
          background: linear-gradient(135deg, var(--gr) 0%, #1a9a6e 100%);
          border: none;
          border-radius: 16px;
          color: var(--bg);
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 12px;
          transition: all 0.2s;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(0, 0, 0, 0.2);
          border-top-color: var(--bg);
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 28px 0;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: var(--bd);
        }

        .divider-text {
          color: var(--tx2);
          font-size: 12px;
          opacity: 0.6;
        }

      

        .register-link {
          text-align: center;
          margin-top: 28px;
          color: var(--tx2);
          font-size: 13px;
        }

        .register-link a {
          color: var(--gr);
          text-decoration: none;
          font-weight: 700;
        }

        .register-link a:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .login-wrapper {
            flex-direction: column;
            max-width: 480px;
          }
          .login-preview {
            min-height: 250px;
          }
          .login-form-panel {
            padding: 32px 24px;
          }
        }

        @media (max-width: 480px) {
          .login-form-panel {
            padding: 24px 20px;
          }
          .form-title {
            font-size: 28px;
          }
         
        }
      `}</style>

      <div className="login-container">
        <div className="login-wrapper">
          {/* Left Panel - Your Image */}
          <div className="login-preview" />
          
          {/* Right Panel - Login Form */}
          <div className="login-form-panel">
            <div className="form-header">
              <h1 className="form-title">Forgot Password</h1> 
            </div>

            <div className="input-group">
              <div className="input-label">
                <span className="label-text">Email address</span>
              </div>
              <div className={`input-wrapper ${focused === "email" ? "focused" : ""}`}>
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
                <input
                  type="email"
                  placeholder="hello@cryptoverse.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="input-field"
                />
              </div>
            </div>

        

            <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
              {loading ? <span className="spinner" /> : <>Sign In <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></>}
            </button>

            <div className="divider">
              <div className="divider-line" />
              <span className="divider-text">or continue with</span>
              <div className="divider-line" />
            </div>

       

            <div className="register-link">
              Don't have an account? <a href="/Register">Create one free</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}