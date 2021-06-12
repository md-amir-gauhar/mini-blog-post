import React from "react";
import { useQuery } from "react-query";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Post = ({ postId, goBack }) => {
  const { data, isLoading } = useQuery(["post", postId], () =>
    fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  );

  if (isLoading) return <p>Loading....</p>;
  return (
    <div>
      <a href="#" onClick={goBack}>
        Go Back
      </a>
      <h1>
        {data.id}-{data.title}
      </h1>
      <p>{data.body}</p>
    </div>
  );
};

export default Post;
