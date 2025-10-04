import { NotificationsNone, Language, Settings} from "@mui/icons-material";
import "./topbar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext"
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const Topbar = () => {
    const [currentUser, setCurrentUser] = useState(null); 
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setCurrentUser(storedUser); 
    }
  }, []);
  

  const handleLogout = () => {
    toast.success("Logged out successful!");
    dispatch({ type: "LOGOUT" }); 
    localStorage.removeItem("user");
    navigate("/"); 
};

const handleWatch = () =>{
  toast.success("Navigating to Watch!");
  window.location.href = "https://deploy-netflix-ui01.vercel.app/";  
}

  return (
    
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">DashBoard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="profile">
                <img className="topAvatar" src={ currentUser?.profilePic || "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"} alt="" />
                <div className="options">
                    <span className='setting' onClick={handleWatch}>Go to Watch</span>
                    <span className='logout' onClick={handleLogout}>Logout</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
