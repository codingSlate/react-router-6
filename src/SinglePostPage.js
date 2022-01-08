import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { rettrieveBlog } from './BlogFetch';

const SinglePostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  console.log(post);
  useEffect(() => {
    (async () => {
      const getpost = await rettrieveBlog(id);
      // console.log(getpost);
      setPost(getpost.data);
    })();
  }, [id]);

  return (
    <div>
      I am list of places
      <div>Single Post</div>
      {post === null && <p>Loading.....</p>}
      {post != null && (
        <>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};
export default SinglePostPage;
