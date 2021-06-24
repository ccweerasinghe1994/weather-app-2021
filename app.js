const request = require("request");

const url = "https://jsonplaceholder.typicode.com/posts";
const url2 = "https://jsonplaceholder.typicode.com/userasas";

// request(
//   {
//     url: url2,
//     json: true,
//   },
//   (error, response, body) => {
//     if (error) {
//       console.log("unable to connect to the api");
//     } else if (Object.keys(body)) {
//       console.log("unable to find the body");
//     } else {
//       body.map(({ address }) => {
//         const { lat, lng } = address.geo;
//         console.log(`this is ${lat} and ${lng}`);
//       });
//     }
//   }
// );

// geo cording
const urlMap =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoid2NoYW1hcmEiLCJhIjoiY2tweHBkenVxMDV2NDJ3bGRjb3loZGx4MyJ9.u22wvlIMmnZCG_yqxAzQF";

request(
  {
    url: urlMap,
    json: true,
  },
  (error, response, body) => {
    if(error){
      console.log("unable to connect to the api");
    }else if(body.message){
      console.log("there is no data for this request");
      console.log(body.message);
    }else{
      console.log(body);
    }
    
  }
);
