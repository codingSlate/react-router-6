export const AllBlogs = async () => {
  // const response = await fetch('https://api.zippopotam.us/us/33162');
  const response = await fetch('https://gorest.co.in/public/v1/posts');
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Something went wrong!!');
};

export const rettrieveBlog = async (id) => {
  // const response = await fetch(`https://api.publicapis.org/entries/${id}`);
  const response = await fetch(`https://gorest.co.in/public/v1/posts/${id}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Something went wrong');
};
