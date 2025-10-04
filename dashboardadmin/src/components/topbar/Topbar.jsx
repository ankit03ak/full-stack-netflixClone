import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import "./topbar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext"
import { useContext } from "react";
import { toast } from "sonner";

const Topbar = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    // console.log("logging Out")
    toast.success("Logged out successful!");
    dispatch({ type: "LOGOUT" }); 
    localStorage.removeItem("user");
    navigate("/"); 
};

const handleWatch = () =>{
  toast.success("Navigating to Watch!");
  window.location.href = "https://deploy-netflix-ui01.vercel.app/";  //frontend Link
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
                {/* <ArrowDropDown className='icon'/> */}
                <img className="topAvatar" src="http://images.statusfacebook.com/profile_pictures/stylish-girls/stylish-girls-profile-pictures-06.jpg" alt="" />
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
