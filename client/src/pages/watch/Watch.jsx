import { ArrowBackOutlined } from '@mui/icons-material'
import './watch.scss'
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmJjYjlmNzEyOTQyYThjODZjMGZiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczOTU5NzM1MSwiZXhwIjoxNzQwMjAyMTUxfQ.znKVoYDvKRMK6I3lJffyI0XOstHiGF91sy9ZGjDE82I"
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

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="watch">
      <Link to="/">
      <div className="back">
        <ArrowBackOutlined/>
        Home
      </div>
      </Link>
      <video 
      className="video" autoPlay={true} progress controls
      src={movie.video}
      />
    </div>
  )
}

export default Watch
