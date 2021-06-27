const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoid2NoYW1hcmEiLCJhIjoiY2tweHBkenVxMDV2NDJ3bGRjb3loZGx4MyJ9.u22wvlIMmnZCG_yqxAzQF`;
  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback("unable to connect to location service", undefined);
    } else if (body.message) {
      callback("unable to find the location try finding a another", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
