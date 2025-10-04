import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DeleteOutlined } from "@mui/icons-material";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

const ProductList = () => {
    const {movies, dispatch} = useContext(MovieContext)

    useEffect(()=>{
      getMovies(dispatch);
    },[dispatch])

    


const handleDelete = (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this movie?");
  if (!confirmDelete) return;

  deleteMovie(id, dispatch);
  alert("Movie deleted successfully!");
};


      const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        {
          field: "movie",
          headerName: "Movie",
          width: 200,
          renderCell: (params)=>{
            return (
              <div className="productListProduct">
                <img className="productListImg" src={params.row.img} alt="" />
                {/* {params.row.name} */}
                {params.row.title}

              </div>
            )
          }
        },
        {
          field: "genre",
          headerName: "Genre",
          width: 120,
        },
        {
          field: "year",
          headerName: "Year",
          width: 120,
        },
        {
          field: "limit",
          headerName: "Limit",
          width: 120,
        },
        {
          field: "isSeries",
          headerName: "isSeries",
          width: 120,
        },
        {
          field: "action",
          headerName: "Action",
          width: 160,
          renderCell: (params) => {
            // console.log(params.row._id)
            return (
              <>
              {/* <Link to={{pathname:"/product/"+params.row._id, movie:params.row}}> */}
              <Link to={`/product/${params.row._id}?movieId=${params.row._id}`}>

              <button className="productListEdit">Edit</button>
              </Link>
                <DeleteOutlined className="userListDelete" onClick={()=>handleDelete(params.row._id)}/>
              </>
            )
          }
        },
      ];

  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(r)=>r._id}
      />
    </div>
  )
}

export default ProductList
