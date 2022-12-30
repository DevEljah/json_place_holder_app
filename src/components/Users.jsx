import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/users/1";

function Users() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    /* axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    }); */
    //// Mosh ////
    /*  async function getUsers() {
      const re = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(re.data);
    }

    getUsers(); */
    /////////////////////////////

    /* axios.get(baseURL).then((response) => {
      setPost(response.data);
    }); */
    /////////////////////////////

    /* fetch(baseURL)
      .then((res) => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then((data) => setPosts(data)); */

    fetch(baseURL)
      .then((res) => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Json Place Holder</h1>
      <h1>{users.name}</h1>
      <p>{users.email}</p>

      {/*   <h1>{posts.name}</h1>
      <p>{posts.email}</p> */}
      {/*  <ul>
        {users.map((user) => {
          <li key={user.id}> {user.name} </li>;
        })}
      </ul> */}
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
