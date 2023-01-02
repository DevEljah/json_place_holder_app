import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/users";
// const baseURL = "https://jsonplaceholder.typicode.com/users/1";

function Users() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

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
    /////////////////////////////

    /*  const options = {
      method: "GET",
      url: "https://jsonplaceholder30.p.rapidapi.com/users",
      headers: {
        "X-RapidAPI-Key": "2e69d7ab27msh2b1ed5f886aadeep12ef8cjsnd2412a7fd097",
        "X-RapidAPI-Host": "jsonplaceholder30.p.rapidapi.com",
      },
    };

    axios.request(options).then(function (response) {
      setUsers(response.data);
      console.log(response.data);
    }); */
    /////////////////////////////
    /////////////////////////////

    axios.request(baseURL).then(function (res) {
      // request => get
      setUsers(res.data);
      console.log(res.data);
    });
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
      {/*   <h1>{users.name}</h1>
      <p>{users.email}</p> */}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} | {user.email}
          </li>
        ))}
      </ul>
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
