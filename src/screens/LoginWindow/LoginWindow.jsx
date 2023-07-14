import React from "react";
import "./style.css";

export const LoginWindow = () => {
  return (
    <div className="login-window">
      <div className="div">
        <div className="zoom">
          <div className="group">
            <div className="zoom-2">
              <div className="group-2" />
              <img className="zoom-out" alt="Zoom out" src="/img/line-2.png" />
              <img className="zoom-in" alt="Zoom in" src="/img/line-2.png" />
              <img className="magnification-large" alt="Magnification large" src="/img/line-2.png" />
              <img className="line" alt="Line" src="/img/line-2.png" />
              <img className="img" alt="Line" src="/img/line-2.png" />
            </div>
          </div>
        </div>
        <div className="overlap">
          <img className="language" alt="Language" src="/img/language.png" />
          <img className="logout" alt="Logout" src="/img/logout.png" />
          <div className="frame">
            <div className="group-3">
              <img className="dfd" alt="Dfd" src="/img/d259f62d-8138-4973-a792-a77219bcd587.png" />
              <img className="logo-copy" alt="Logo copy" src="/img/logo-copy-3.png" />
            </div>
            <div className="frame-2" >
            <input
             className="user"
             type="email"
                  name="email-address"
                  id="email-address"
                  
                />
                </div>
            <div className="overlap-group">
              <div className="text-wrapper">Enter</div>
            </div>
            <div className="text-wrapper-2">Username</div>
            <div className="text-wrapper-3">Administration Login</div>
            <div className="frame-3" > 
            <input
             className="pass"
             type="password"
                  name="password"
                  id="password"
                  
                />
                </div>
            <div className="text-wrapper-4">Password</div>
            <div className="text-wrapper-5">Forgot Password ?</div>
          </div>
        </div>
      </div>
    </div>
  );
};
