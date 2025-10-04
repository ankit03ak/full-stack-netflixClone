import "./newUser.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const NewUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    profilePic: "",
    isAdmin: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/register`, user);
      toast.success("User created successfully!");
      navigate('/users');
    } catch (error) {
      toast.error("Failed to create user. Please try again.");
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" name="username" placeholder="john" onChange={handleChange} required />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input type="email" name="email" placeholder="john@gmail.com" onChange={handleChange} required />
        </div>

        <div className="newUserItem">
          <label>Password</label>
          <input type="password" name="password" placeholder="password" onChange={handleChange} required />
        </div>

        <div className="newUserItem">
          <label>Profile Picture URL</label>
          <input type="text" name="profilePic" placeholder="https://example.com/image.jpg" onChange={handleChange} />
        </div>

        <div className="newUserItem">
          <label>Admin</label>
          <input type="checkbox" name="isAdmin" checked={user.isAdmin} onChange={handleChange} />
        </div>

        <button type="submit" className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
