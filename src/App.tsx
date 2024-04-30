import { useState } from "react";
import "./App.css";
import SocialCards from "./components/SocialCards";

function App() {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className={`container ${isSignIn ? "active" : ""}`}>
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <SocialCards />
          <small>or use your email for registration</small>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <SocialCards />
          <small>or use your email password</small>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget your password?</a>
          <button>Sign In</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button onClick={() => setIsSignIn(false)}>Sign In</button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button onClick={() => setIsSignIn(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
