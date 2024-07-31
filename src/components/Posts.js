import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  [search, setSearch] = useState("");
  [posts, setPosts] = useState([]);
  [filteredPosts, setFilteredPosts] = useState([]);

  const getPost = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        console.log("response", response);
        setPosts(response.data);
        setFilteredPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearch(val);
    if (val) {
      const filteredPosts = posts.filter((post) => post.body.includes(val));
      setFilteredPosts(filteredPosts);
    } else {
      setFilteredPosts(posts);
    }
  };

  return (
    <>
      <form class="m-4">
        <div className="w-50">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            class="form-control"
            id="search"
            aria-describedby="search"
            placeholder="search"
          />
        </div>
      </form>

      <table class="table table-success table-striped table-bordered">
        <thead>
          <tr>
            <th scope="row">Id</th>
            <th scope="row">Title</th>
            <th scope="row">Body</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map(({ id, title, body }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Posts;
