import { useContext, useState } from "react";
import "./register.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { register } from "../../context/apiCalls";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, error, isFetching } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      console.error("All fields are required");
      return;
    }


    await register({ username, email, password }, dispatch);
    navigate("/login"); 
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton cursor" onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your details to create an account.</p>

        <form className="input" onSubmit={handleSubmit}>
          <input
          className="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="email@exapmle.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="alreadyAccount">
            
          Already have an account ?  
           <b onClick={() => navigate("/login")}>
             

             &nbsp; Sign In
          </b>
          </div>
          <button className="registerButton" type="submit" disabled={isFetching}>
            {isFetching ? "Signing Up..." : "Register"}
          </button>
          
        </form>

        {error && <span className="error">Registration failed!</span>}
      </div>
    </div>
  );
};

export default Register;
