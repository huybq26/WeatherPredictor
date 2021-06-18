const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoiaHV5YnEyNiIsImEiOiJja3B5OWJ4anQwNWduMm9xb2VwZnM4MmlsIn0.qfuwsqDUKhfg8jI0Bks5wA';

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined); // Just define the first argument(error) and leaves the second argument (data) undefined
    } else if (response.body.features[0].length === 0) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
