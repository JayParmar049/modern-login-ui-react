import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const AuthForm = ({ type }) => {
  const isSignUp = type === "sign-up";

  return (
    <div className={`form-container ${type}`}>
      <form>
        <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>

        <div className="social-icons">
          <a href="#"><FaGooglePlusG /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>

        <span>
          {isSignUp
            ? "or use your email for registration"
            : "or use your email password"}
        </span>

        {isSignUp && <input type="text" placeholder="Name" />}

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        {!isSignUp && <a href="#">Forget Your Password?</a>}

        <button>{isSignUp ? "Sign Up" : "Sign In"}</button>
      </form>
    </div>
  );
};

export default AuthForm;
