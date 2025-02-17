import { Link, useLocation } from "react-router-dom"
// import Chart from "../../components/chart/Chart"
import "./product.css"
// import { productData } from "../../dummyData"
import { Public, Publish } from "@mui/icons-material"
import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {



    const [movie, setMovie] = useState(null);
    const location = useLocation();
  
    // Extract the query parameter
    const query = new URLSearchParams(location.search);
    const movieId = query.get("movieId");
  
    // console.log(movieId);

    useEffect(() => {
        const fetchMovie = async () => {
          try {
            const res = await axios.get(`/movies/find/${movieId}`
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

    //   console.log(movie);

return (
  <div className="product">
    <div className="productTitleContainer">
      <h1 className="productTitle">Movie</h1>
      <Link to="/newproduct">
        <button className="productAddButton">Create</button>
      </Link>
    </div>

    {movie ? (
      <>
        <div className="productTop">
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src={movie.img} alt="" className="productInfoImg" />
              <span className="productName">{movie.title}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">{movie._id}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">genre:</span>
                <span className="productInfoValue">{movie.genre}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">year:</span>
                <span className="productInfoValue">{movie.year}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">limit:</span>
                <span className="productInfoValue">{movie.limit}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="productBottom">
          <div className="productForm">
            <div className="productFormLeft">
              <label>Movie Title</label>
              <input type="text" placeholder={movie.title} />
              <label>Year</label>
              <input type="text" placeholder={movie.year} />
              <label>Genre</label>
              <input type="text" placeholder={movie.genre} />
              <label>Limit</label>
              <input type="text" placeholder={movie.limit} />
              <label>Trailer</label>
              <input type="file" placeholder={movie.trailer} />
              <label>Video</label>
              <input type="file" placeholder={movie.video} />
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img src={movie.img} alt="" className="productUploadImg" />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="productButton">Update</button>
            </div>
          </div>
        </div>
      </>
    ) : (
      <p>Loading movie details...</p>
    )}
  </div>
)

}
export default Product
