import axios from "axios";

const options = {
  method: "GET",
  url: "https://jsonplaceholder30.p.rapidapi.com/users",
  headers: {
    "X-RapidAPI-Key": "2e69d7ab27msh2b1ed5f886aadeep12ef8cjsnd2412a7fd097",
    "X-RapidAPI-Host": REACT_APP_API_KEY,
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
