import SearchIcon from '@mui/icons-material/Search';
import React, { useContext } from "react"
import './navbar.scss'
import {ArrowDropDown, Notifications } from '@mui/icons-material';
import { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true) ;
        return () => (window.onscroll = null); 
    }

    const handleLogout = () => {
      dispatch({ type: "LOGOUT" }); 
      localStorage.removeItem("user"); 
      navigate("/");
  };

  const handleAdmin = () => {
    const res = localStorage.getItem("user");
    const user = JSON.parse(res);
    
    if(user.isAdmin === true){
      window.location.href = "https://adminui01.vercel.app/";
    }
    else{
      alert("You are not an admin 🚫")
    }

    
  };

    // console.log(isScrolled);


  return (
    <div className={isScrolled ? "navbar scrolled"  : "navbar"}>
      <div className="container">
        <div className="left">
            <img
             src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
             alt="logo"
             />
             <Link to="/" className='link'>
             <span>HomePage</span>
             </Link>
             <Link to="/series" className='link'>
             <span>Series</span>
             </Link>
             <Link to="/movies" className='link'>
             <span>Movies</span>
             </Link>
             <span>New And Popular</span>
             <span>My list</span>
        </div>
        <div className="right">
            <SearchIcon className='icon'/>
            <span>KID</span>
            <Notifications className='icon'/>
            {/* <img 
            src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" 
            alt="logo" 
              /> */}
            <div className="profile">
                {/* <ArrowDropDown className='icon'/> */}
                <img 
            src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" 
            alt="logo" 
              />
                <div className="options">
                    <span className='setting'>Profile</span>
                    <span className='admin' onClick={handleAdmin}>Admin Dashboard</span>
                    <span onClick={handleLogout} className='logout'>Logout</span>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
