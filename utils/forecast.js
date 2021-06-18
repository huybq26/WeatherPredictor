const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=60e4cf730eb9a360c4ede1924682f4aa&query=' +
    latitude +
    ',' +
    longitude;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.error) {
      callback('Unable to connect to find location!', undefined);
    } else {
      callback(
        undefined,
        'It is currently ' +
          response.body.current.temperature +
          ' degrees out. It feels like ' +
          response.body.current.feelslike +
          ' degrees out.'
      );
    }
  });
};

module.exports = forecast;
