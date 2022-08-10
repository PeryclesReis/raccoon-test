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
    const endpoint = "https://dummyjson.com/login";
    const response = await fetch(endpoint, {
      Headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

export {
  apiProducts,
  apiLogin,
}
