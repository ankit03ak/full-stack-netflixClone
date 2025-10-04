import { ArrowBackOutlined } from '@mui/icons-material'
import './watch.css'
import React, { useEffect, useState } from "react"
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'



const Watch = () => {
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const movieId = query.get("movieId");

  const URL = import.meta.env.VITE_API_BASE_URL;



  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`${URL}/api/movies/find/${movieId}`
          ,
          {
            headers: {
              token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
          }
        );
        setMovie(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (movieId) {
      fetchMovie();
    }
  }, [movieId]);

if (!movie) return <div className="loadingWatch">Loading...</div>;

  return (
     <div className="watch">
    <Link to="/" className="back">
      <ArrowBackOutlined className="backIcon" />
      <span>Home</span>
    </Link>
    <div className="videoContainer">
      <video
        className="video"
        autoPlay
        controls
        src={movie.video}
      />
    </div>
  </div>
  )
}

export default Watch
