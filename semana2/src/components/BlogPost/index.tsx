import { useState, useEffect, useCallback } from "react";

const BlogPost = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Título: {posts[1]?.title}</h1>
      <p>{posts[1]?.body}</p>
    </div>
  );
};

export default BlogPost;
