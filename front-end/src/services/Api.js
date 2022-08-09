const apiProducts = async () => {
  try {
    const endpoint = "https://dummyjson.com/products";
    const response = await fetch(endpoint);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

export {
  apiProducts,
}