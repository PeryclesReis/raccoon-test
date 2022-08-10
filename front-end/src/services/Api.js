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

const apiLogin = async (username, password) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    };
    const endpoint = "https://dummyjson.com/auth/login";
    const response = await fetch(endpoint, requestOptions);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

export {
  apiProducts,
  apiLogin,
}
