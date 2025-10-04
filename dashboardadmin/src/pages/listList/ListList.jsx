import "./listList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DeleteOutlined } from "@mui/icons-material";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/apiCalls";

const ListList = () => {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this list?");
    if (!confirmDelete) return;

    deleteList(id, dispatch);
    alert("List deleted successfully!");
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "Title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => (
        <>
          <Link to={`/list/${params.row._id}?listId=${params.row._id}`}>
            <button className="productListEdit">Edit</button>
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
    <div className="productList">
      <DataGrid
        rows={lists}
        getRowId={(r) => r._id}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default ListList;
