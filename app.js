const request = require("request");

const url = "https://jsonplaceholder.typicode.com/posts";
const url2 = "https://jsonplaceholder.typicode.com/users";

request(
  {
    url: url2,
    json: true,
  },
  (error, response, body) => {
    if (error) throw new Error(error);

    body.map(({ address }) => {
      const { lat, lng } = address.geo;
      console.log(`this is ${lat} and ${lng}`);
    });
  }
);

// geo cording
const urlMap =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoid2NoYW1hcmEiLCJhIjoiY2tweHBkenVxMDV2NDJ3bGRjb3loZGx4MyJ9.u22wvlIMmnZCG_yqxAzQFQ&limit=1";

request(
  {
    url: urlMap,
    json: true,
  },
  (error, response, body) => {
    console.log(body);
  }
);
