import { useContext, useState } from "react";
import "./login.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { login } from "../../context/apiCalls";
import { toast } from "sonner";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, isFetching } = useContext(AuthContext);
  const navigate = useNavigate();
  

const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    toast.error("Both fields are required!");
    return;
  }

  try {
    const response = await login({ email, password }, dispatch);

    if (response?.success) {
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error(response?.message || "Invalid email or password!");
    }
  } catch (error) {
    // Handle unexpected errors
    console.error("Login error:", error);
    toast.error("Something went wrong. Please try again.");
  }
};


  const newToHere = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="email@exapmle.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="loginButton" type="submit" disabled={isFetching}>
            {isFetching ? "Signing In..." : "Sign In"}
          </button>
          <span>
            New to Netflix?{" "}
            <b className="newToHere" onClick={newToHere}>
              Sign Up Now
            </b>
          </span>
          <div>
  <br />
          <small>
            This page is protected by Google reCAPTCHA to ensure you are not a bot...{" "}
            <b>Learn more</b>
          </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
