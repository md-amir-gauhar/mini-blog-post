import "./styles.css";
import { useQuery } from "react-query";
import { useState } from "react";
import Post from "./Post";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  const [postId, setPostId] = useState(null);

  const { isLoading, data: posts } = useQuery("posts", () =>
    fetcher("https://jsonplaceholder.typicode.com/posts")
  );

  if (isLoading) return <p>Loading...</p>;

  if (postId !== null) {
    return <Post postId={postId} goBack={() => setPostId(null)} />;
  }

  return (
    <div className="App">
      {posts.map((post) => {
        return (
          <p key={post.id}>
            <a onClick={() => setPostId(post.id)} href="#">
              {post.id}-{post.title}
            </a>
          </p>
        );
      })}
    </div>
  );
}
