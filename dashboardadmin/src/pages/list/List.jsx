import { Link, useLocation } from "react-router-dom"
import "./list.css"
import { useEffect, useState } from "react";
import axios from "axios";

const List = () => {


  const [lists, setLists] = useState([]);
  const [list, setList] = useState(null);
  const location = useLocation();

  // Extract the query parameter
  const query = new URLSearchParams(location.search);
  const listId = query.get("listId");

  // console.log(listId);

    useEffect(() => {
      const fetchLists = async () => {
        try {
          const res = await axios.get(`/lists/`, {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmJjYjlmNzEyOTQyYThjODZjMGZiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczOTU5NzM1MSwiZXhwIjoxNzQwMjAyMTUxfQ.znKVoYDvKRMK6I3lJffyI0XOstHiGF91sy9ZGjDE82I"
            },
          });
          setLists(res.data); // Store the entire data array
        } catch (err) {
          console.error(err);
        }

      };
    
      fetchLists();
    }, [listId]);
    
    useEffect(() => {
      lists.find((list) => list._id === listId);
      setList(lists.find((list) => list._id === listId));
    }, [lists, listId]);
  

return (
  <div className="product">
    <div className="productTitleContainer">
      <h1 className="productTitle">List</h1>
      <Link to="/newlist">
        <button className="productAddButton">Create</button>
      </Link>
    </div>

    {list ? (
      <>
        <div className="productTop">
          <div className="productTopRight">
            <div className="productInfoTop">
              <span className="productName">{list.title}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">{list._id}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">genre:</span>
                <span className="productInfoValue">{list.genre}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">type:</span>
                <span className="productInfoValue">{list.type}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="productBottom">
          <div className="productForm">
            <div className="productFormLeft">
              <label>List Title</label>
              <input type="text" placeholder={list.title} />
              <label>Type</label>
              <input type="text" placeholder={list.type} />
              <label>Genre</label>
              <input type="text" placeholder={list.genre} />
            </div>
            <div className="productFormRight">
              <button className="productButton">Update</button>
            </div>
          </div>
        </div>
      </>
    ) : (
      <p>Loading List details...</p>
    )}
  </div>
)

}
export default List
