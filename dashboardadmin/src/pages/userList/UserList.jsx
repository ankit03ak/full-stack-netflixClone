import { DeleteOutlined } from "@mui/icons-material";
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";


const UserList = () => {
  const [data, setData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_BASE_URL;

const handleDelete = (id) => {
  toast.warning("Are you sure you want to delete this user?", {
    action: {
      label: "Yes",
      onClick: async () => {
        try {
          await axios.delete(`${apiUrl}/api/users/${id}`, {
            headers: {
              token:
                "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
          });
          setData((prev) => prev.filter((item) => item._id !== id));
          toast.success("User deleted successfully!");
        } catch (error) {
          toast.error("Failed to delete user. Please try again.");
          console.error("Error deleting user:", error);
        }
      },
    },
    cancel: {
      label: "No",
    },
    duration: 5000,
  });
};



    useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/users`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setData(res.data);
        toast.success("Users fetched successfully!");

      } catch (error) {
        toast.error("Failed to fetch users. Please try again.");
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [apiUrl]);


  // console.log(data)



const columns = [
  { field: "_id", headerName: "ID", width: 220 },
  {
    field: "username",
    headerName: "User",
    width: 200,
    renderCell: (params) => (
      <div className="userListUser">
        <img
          className="userListImg"
          src={params.row.profilePic || "https://tse1.mm.bing.net/th/id/OIP.AN4lWoy7eWCxTXb_vxedAAHaHa?pid=Api&P=0&h=180"}
          alt={params.row.username}
        />
        {params.row.username}
      </div>
    ),
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "isAdmin",
    headerName: "Admin",
    width: 120,
    renderCell: (params) => (params.row.isAdmin ? "Yes" : "No"),
  },
  {
    field: "action",
    headerName: "Action",
    width: 160,
    renderCell: (params) => (
      <>
        <Link to={`/user/${params.row._id}`}>
          <button className="userListEdit">Edit</button>
        </Link>
        <DeleteOutlined
          className="userListDelete"
          onClick={() => handleDelete(params.row._id)}
        />
      </>
    ),
  },
];





  return (
    <div className="userList">
      <DataGrid
        rows={data}
        getRowId={(row) => row._id}
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
