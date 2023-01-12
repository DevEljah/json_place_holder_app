import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import { fetchData, options } from "../utils/fetch";

const baseURL = "https://jsonplaceholder.typicode.com/users";
// const baseURL = "https://jsonplaceholder.typicode.com/users/1";

function Users() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    console.log("deleted");
  };

  useEffect(() => {
    /////////////////////////////
    //// Mosh ////
    /////////////////////////////
    /*  async function getUsers() {
      const re = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(re.data);
      console.log(re.data);
    }

    getUsers(); */
    /////////////////////////////
    axios.request(options).then(function (response) {
      setUsers(response.data);
      console.log(response.data);
    });
    /////////////////////////////
    /* const options = {
      method: "GET",
      url: "https://jsonplaceholder30.p.rapidapi.com/users",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "jsonplaceholder30.p.rapidapi.com",
      },
    };

    axios.request(options).then(function (response) {
      setUsers(response.data);
      console.log(response.data);
    }); */
    /////////////////////////////
    /////////////////////////////
    /* axios.request(baseURL).then(function (res) {
      // request => get
      setUsers(res.data);
      console.log(res.data);
    }); */
    /////////////////////////////
    /////////////////////////////
    /* fetch(baseURL)
      .then((res) => res.json())
      .then((data) => setUsers(data)); */
    /////////////////////////////
    /////////////////////////////
    /* fetch(baseURL)
      .then((res) => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then((data) => setUsers(data)); */
    /////////////////////////////
  }, []);

  return (
    <div>
      <h1>Json Place Holder</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td scope="row"> {user.id} </td>
              <td> {user.username} </td>
              <td> {user.email} </td>
              <td> {user.address.city} </td>
              <td>
                <button
                  onClick={() => handleDelete(user.id)}
                  type="button"
                  className="btn btn-danger"
                >
                  &nbsp; X &nbsp;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <h1>{process.env.REACT_APP_CONTENT}</h1> */}
    </div>
  );
}

export default Users;

/* const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
 */
{
  /* <h1>{users.name}</h1>
      <p>{users.email}</p> */
}

{
  /*   <h1>{posts.name}</h1>
      <p>{posts.email}</p> */
}
