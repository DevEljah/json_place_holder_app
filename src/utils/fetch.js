export const options = {
  method: "GET",
  url: "https://jsonplaceholder30.p.rapidapi.com/users",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "jsonplaceholder30.p.rapidapi.com",
  },
};

/* export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}; */

/* axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
 */
