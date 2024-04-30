import "./App.css";
import SocialCards from "./components/SocialCards";

function App() {
  return (
    <>
      <div className="container">
        <form>
          <h1>Create Account</h1>
          <SocialCards />
          <small>or use your email for registration</small>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>

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
    </>
  );
}

export default App;
