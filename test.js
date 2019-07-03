const axios = require("axios");
const a = async (name, email, password) => {
  try {
    const response = await axios.post("http://localhost:4000/auth/signup", {
      name,
      email,
      password
    });
    console.log(response.data);
  } catch (e) {
    console.log(e.response.data);
  }
};

a("abc abc", "abc@abc.com", "123456");
