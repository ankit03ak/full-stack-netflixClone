import { useState } from "react";
import "./newProduct.css";
import axios from "axios";

const NewProduct = () => {
  const [movie, setMovie] = useState({});
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET); // Using env variable
    formData.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME); // Using env variable





    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/depezajet/upload`,formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      console.log("Upload successful", res.data);
      return res.data.secure_url; // Return the uploaded file URL
    } catch (error) {
      console.error("Upload failed:", error.response ? error.response.data : error.message);
    }
    
  };


  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


  const handleUpload = async () => {
    let uploadedCount = 0;

    const imgUrl = img ? await uploadToCloudinary(img) : null;
    if (imgUrl) {
      setMovie((prev) => ({ ...prev, img: imgUrl }));
      uploadedCount++;
    }

    const imgTitleUrl = imgTitle ? await uploadToCloudinary(imgTitle) : null;
    if (imgTitleUrl) {
      setMovie((prev) => ({ ...prev, imgTitle: imgTitleUrl }));
      uploadedCount++;
    }

    const imgSmUrl = imgSm ? await uploadToCloudinary(imgSm) : null;
    if (imgSmUrl) {
      setMovie((prev) => ({ ...prev, imgSm: imgSmUrl }));
      uploadedCount++;
    }

    const trailerUrl = trailer ? await uploadToCloudinary(trailer) : null;
    if (trailerUrl) {
      setMovie((prev) => ({ ...prev, trailer: trailerUrl }));
      uploadedCount++;
    }

    const videoUrl = video ? await uploadToCloudinary(video) : null;
    if (videoUrl) {
      setMovie((prev) => ({ ...prev, video: videoUrl }));
      uploadedCount++;
    }

    setUploaded(uploadedCount);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (uploaded < 5) {
      alert("Please upload all files first!");
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/api/movies`, movie,
        {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmJjYjlmNzEyOTQyYThjODZjMGZiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczOTU5NzM1MSwiZXhwIjoxNzQwMjAyMTUxfQ.znKVoYDvKRMK6I3lJffyI0XOstHiGF91sy9ZGjDE82I"
          },
        }
      ); 
      alert("Created successfully!");
    } catch (error) {
      console.error("Error saving movie:", error);
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Image Title</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="John Wick"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="Limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" onChange={(e) => setTrailer(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" onChange={(e) => setVideo(e.target.files[0])} />
        </div>
        <button
          className="addProductButton"
          type="button"
          onClick={handleUpload}
        >
          Upload Files
        </button>
        <button className="addProductButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;

