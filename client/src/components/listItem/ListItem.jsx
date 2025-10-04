import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listItem.scss";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState(null);

  const URL = import.meta.env.VITE_API_BASE_URL;


  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`${URL}/api/movies/find/` + item, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.error("Failed to fetch movie data:", error);
      }
    };
    getMovie();
  }, [item]);

  return movie && movie._id ? (
    <Link to={`/watch?movieId=${movie._id}`}>
      <div
        className="listItem"
        // style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img || "https://via.placeholder.com/150"} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer || "fallback-trailer.mp4"} autoPlay loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  ) : (
    <div className="listItem loading">Loading...</div>
  );
}

export default ListItem;



