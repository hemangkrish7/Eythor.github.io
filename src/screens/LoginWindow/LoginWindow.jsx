import React, { useState } from "react";
import "./style.css";
import "tachyons";
import ReCAPTCHA from "react-google-recaptcha";


export const LoginWindow = () => {
  const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);
  const [isForgotPasswordRed, setIsForgotPasswordRed] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
 // Hook to access the history object
  const handleCaptchaChange = (response) => {
    console.log("Captcha value:", response);
    // You can perform additional logic here based on the captcha response
  };
  
  const handleForgotPasswordClick = () => {
    setIsForgotPasswordClicked(true);
    setIsForgotPasswordRed(true);

    setTimeout(() => {
      setIsForgotPasswordRed(false);
    }, 100); // Set the delay time in milliseconds (1 second = 1000 milliseconds)
  };

  const [isSignInClicked, setIsSignInClicked] = useState(false);

  const handleSignInClick = () => {
    setIsSignInClicked(true);
    window.location.href ="http://localhost:63662/";
    setTimeout(() => {
      setIsSignInClicked(false);
      // After successful sign-in, navigate to the homepage
    
    }, 500);
  };
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  const handleLogout = () => {
    window.close(); // Close the current tab or window
  };

  return (
    <div className={`login-window ${isSignInClicked ? "signin-expanded" : ""}`}>
    <div className={`overlap ${isSignInClicked ? "expanded" : ""}`}>
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
        <div className="language-selector">
                <div className="language" onClick={() => handleLanguageChange("English")}>
                  <img className="language-icon" src="/img/language.png" alt="Language" />
                 
                  <div className="language-options">
                    <div
                      className={`language-option ${selectedLanguage === "English" ? "selected" : ""}`}
                      onClick={() => handleLanguageChange("English")}
                    >
                      <img src="/img/english-flag.png" alt="English Flag" />
                      English
                    </div>
                    <div
                      className={`language-option ${selectedLanguage === "Arabic" ? "selected" : ""}`}
                      onClick={() => handleLanguageChange("Arabic")}
                    >
                      <img src="/img/arabic-flag.png" alt="Arabic Flag" />
                      Arabic
                    </div>
                  </div>
                  {selectedLanguage === "Arabic" && <div className="shadow" />}
                </div>
              </div>
              <div className="text-wrapper-5" onClick={handleForgotPasswordClick}>
                {isForgotPasswordClicked ? (
                  <span className={isForgotPasswordRed ? "highlighted-text-red" : "highlighted-text"}>
                    Forgot Password ?
                  </span>
                ) : (
                  "Forgot Password ?"
                )}
              </div>

              <img className="logout" alt="Logout" src="/img/logout.png" onClick={handleLogout} />
              {/* Rest of your code */}
          <div className="frame flex justify-center items-center">
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
                
                
            <div className="text-wrapper-2 ">Username</div>
            <div className="text-wrapper-3 b">Administration Login</div>
            <div className="frame-3" > 
            <input
             className="pass"
             type="password"
                  name="password"
                  id="password"
                  
                />
                </div>
              

            
            <div className="text-wrapper-4">Password</div>
          
          
              
            <div className="text-wrapper-5" onClick={handleForgotPasswordClick}>
            
              {isForgotPasswordClicked ? (
                <span className={isForgotPasswordRed ? "highlighted-text-blue" : "highlighted-text"}>
                  Forgot Password ?
                </span>
              ) : (
                "Forgot Password ?"
              )}
              <div className="recaptcha-container">
                <ReCAPTCHA
                  sitekey="6LfzvC4nAAAAAIWqA7zAAJ8qNOMzDtJ8bVy2deL_"
                  size="compact"
                  style={{ transform: 'scale(0.9)' }}
                  onChange={handleCaptchaChange}
                />
              </div>
            </div>
            
           
              <div className={`overlap-group ${isSignInClicked ? "expanded" : ""}`}onClick={handleSignInClick}>
                <div className={`text-wrapper ${isSignInClicked ? "expanded" : ""}`} onClick={handleSignInClick}>
                  Sign in
                </div>
              </div>
            
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
};