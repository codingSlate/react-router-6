export const listProducts = async () => {
  const response = await fetch('https://api.zippopotam.us/us/33162');
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Something went wrong!!');
};
