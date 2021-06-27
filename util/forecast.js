const requset =  require('request')
const forecast = (lat, long, callback) => {
  const url = `https://jsonplaceholder.typicode.com/user${
    encodeURIComponent(la) + encodeURIComponent(long)
  }`;
  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback("unable to connect to location service", undefined);
    } else if (body.message) {
      callback("unable to find the location try finding a another", undefined);
    } else {
      callback(undefined, {
        data: response.body,
      });
    }
  });
};

module.exports = forecast;