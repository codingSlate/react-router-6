import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { rettrieveBlog } from './FetchBlogs';

const SinglePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  // console.log(post);
  useEffect(() => {
    try {
      (async () => {
        const getpost = await rettrieveBlog(id);
        setPost(getpost.data);
      })();
    } catch (e) {
      console.log('Some Error '.e);
      navigate('/', { replace: false });
    }
  }, [id]);

  return (
    <div>
      <div>Single Post</div>
      {post === null && <p>Loading.....</p>}
      {post != null && (
        <>
          <h4>{post.title}</h4>
          <p>{post.body.slice(0, 150)}...</p>
        </>
      )}
    </div>
  );
};
export default SinglePost;
