import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { rettrieveBlog } from './BlogFetch';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  // console.log(post);
  useEffect(() => {
    (async () => {
      const getpost = await rettrieveBlog(id);
      setPost(getpost.data);
    })();
  }, [id]);

  return (
    <div>
      <div>Single Post</div>
      {post === null && <p>Loading.....</p>}
      {post != null && (
        <>
          <h4>{post.title}</h4>
          <p>{post.body.slice(0,150)}...</p>
        </>
      )}
    </div>
  );
};
export default SinglePost;
