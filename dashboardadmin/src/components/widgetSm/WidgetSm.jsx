import { Visibility } from "@mui/icons-material"
import "./widgetSm.css"
import axios from "axios";
import { useEffect, useState } from "react";

const WidgetSm = () => {

  const [newUsers, setNewUsers] = useState([]);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


  

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/users?new=true`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
          },
        });

        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);



  return (
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user,i) => (
          

          <li key={i} className="widgetSmListItem">
          <img key={i}
            src={user.profilePic || "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"}
            alt=""
            className="widgetSmImg"
            />
          <div className="widgetSmUser">
            <span key={i} className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
      </div>
  )
}

export default WidgetSm
