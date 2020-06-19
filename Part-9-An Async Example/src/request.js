// request.js
const http = require("http");
module.exports = function (url) {
  return new Promise((resolve) => {
    // This is an example of an http request, for example to fetch
    // user data from an API.
    // This module is being mocked in mocks/request.js
    http.get({ path: url }, (response) => {
      let data = "";
      response.on("data", (_data) => (data += _data));
      response.on("end", () => resolve(data));
    });
  });
};
