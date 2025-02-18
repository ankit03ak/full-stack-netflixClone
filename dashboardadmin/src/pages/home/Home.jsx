import Chart from "../../components/chart/Chart"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const Home = () => {
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmJjYjlmNzEyOTQyYThjODZjMGZiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczOTU5NzM1MSwiZXhwIjoxNzQwMjAyMTUxfQ.znKVoYDvKRMK6I3lJffyI0XOstHiGF91sy9ZGjDE82I"
            },
          }
        )
        // console.log(res.data[0]); 
        // setUserStats(res.data);

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

  },[MONTHS])

  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart data={userStats} title="User Analytics" grid datakey="New user"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
