import { DeleteOutlined } from "@mui/icons-material";
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) =>{
    setData(data.filter(item => item.id !== id))
  }

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params)=>{
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt={params.row.username} />
          {params.row.username}
        </div>
      )
    }
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 110,
  },
  {
    field: "transaction",
    headerName: "Transaction Volume",
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 160,
    renderCell: (params) => {
      return (
        <>
        <Link to={"/user/"+params.row.id}>
        <button className="userListEdit">Edit</button>
        </Link>
          <DeleteOutlined className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
        </>
      )
    }
  },
];




  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList
