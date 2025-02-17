import "./listList.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useContext, useEffect} from "react";
import { DeleteOutlined } from "@mui/icons-material";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/apiCalls";

const ListList = () => {
    // const [data, setData] = useState(productRows);
    const {lists, dispatch} = useContext(ListContext)

    useEffect(()=>{
      getLists(dispatch);
    },[dispatch]);

    


    const handleDelete = (id) =>{
        deleteList(id, dispatch)
      }

      const columns = [
        { field: "_id", headerName: "ID", width: 250 },
        
        {
          field: "title",
          headerName: "Title",
          width: 250,
        },
        {
          field: "genre",
          headerName: "Genre",
          width: 150,
        },
        {
          field: "type",
          headerName: "Type",
          width: 150,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            // console.log(params.row._id)
            return (
              <>
              {/* <Link to={{pathname:"/product/"+params.row._id, movie:params.row}}> */}
              <Link to={`/list/${params.row._id}?listId=${params.row._id}`}>

              <button className="productListEdit">Edit</button>
              </Link>
                <DeleteOutlined className="userListDelete" onClick={()=>handleDelete(params.row._id)}/>
              </>
            )
          }
        },
      ];

      // console.log(lists);

  return (
    <div className="productList">
      <DataGrid
        rows={lists}
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

export default ListList
