import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"
import React, { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Featured({type}) {

    const [content, setContent] = useState({});
    const navigate = useNavigate();

    const URL = import.meta.env.VITE_API_BASE_URL;
    console.log(URL)


    
    useEffect(()=>{
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`${URL}/api/movies/random?type=${type}`,
                    {
                        headers: {
                          token:
                          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmJjYjlmNzEyOTQyYThjODZjMGZiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczOTU5NzM1MSwiZXhwIjoxNzQwMjAyMTUxfQ.znKVoYDvKRMK6I3lJffyI0XOstHiGF91sy9ZGjDE82I"
                          
                        },
                      }
                );
                // console.log(res.data[0]);
                setContent(res.data[0]);
            } catch (error) {
                console.log(error);
            }
        };
        getRandomContent()
    },[type])


    const handlePlay = () => {
        navigate(`/watch?movieId=${content._id}`); 
    };

    


    


  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img
            src={content.img} 
            alt="logo" 
        />

        
        <div className="info">
            <img 
            src={content.imgTitle} 
            alt="" 
            />

        <span className="desc">
            {content.desc}
        </span>

        <div className="buttons">
        <button className="play" onClick={handlePlay}>
                        <PlayArrow />
                        <span>Play</span>
                    </button>
            <button className="more">
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Featured