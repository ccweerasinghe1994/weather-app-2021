const request = require("request");
const geocode = require("./util/geocode");
const forecast = require("./util/forecast");
const url = "https://jsonplaceholder.typicode.com/posts";
const url2 = "https://jsonplaceholder.typicode.com/user";

geocode("new york", (error, data) => {
  console.log(error);
  console.log(data);
  forecast(data.lat, data.long, (error, data) => {
    console.log(error);
    console.log(data);
  });
});
