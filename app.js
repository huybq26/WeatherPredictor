const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

let address = [];
if (process.argv.length > 2) {
  for (i = 2; i < process.argv.length; i++) {
    address.push(process.argv[i]);
  }
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error); // if error then just print the error. Dont do anything else
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
} else {
  console.log('No information about the city provided!');
}
