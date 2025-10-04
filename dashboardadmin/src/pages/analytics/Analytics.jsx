import Chart from "../../components/chart/Chart"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import "./analytics.css"
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const Analytics = () => {
  // console.log(userData);
  const MONTHS = useMemo(()=>[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],[])

  const [userStats, setUserStats] = useState([]);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;




  useEffect(()=>{

    const getUserStats = async ()=>{
      try {
        const res = await axios.get(`${API_BASE_URL}/api/users/stats`,
          {
            headers: {
              token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
          }
        )


        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev, 
            {name : MONTHS[item._id - 1], "New User" : item.total},
          ])
        )
      } catch (error) {
        console.log(error);
      }
    };
    getUserStats();

  },[API_BASE_URL,MONTHS])

  return (
    <div className="home">
      <Chart data={userStats} title="User Analytics" grid datakey="New user"/>
      <div className="homeWidgets">
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Analytics
