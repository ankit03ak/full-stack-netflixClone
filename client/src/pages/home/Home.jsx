import './home.scss'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import axios from 'axios';

const Home = ({type}) => {

  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  const URL = import.meta.env.VITE_API_BASE_URL;



  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `${URL}/api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,

           {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmJjYjlmNzEyOTQyYThjODZjMGZiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczOTU5NzM1MSwiZXhwIjoxNzQwMjAyMTUxfQ.znKVoYDvKRMK6I3lJffyI0XOstHiGF91sy9ZGjDE82I"
            },
          }
         
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

          



  return (
    <div className='home'>

      <Navbar/>
      <Featured type={type}/>
      {
        lists.map((list,index) => (
          <List key={index} list={list}/>

        ))
      }
    </div>
  )
}

export default Home;