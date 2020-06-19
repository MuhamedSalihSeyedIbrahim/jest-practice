// user.js
const request = require("./request");
module.exports = {
  getUserName: (userID) => {
    return request("/users/" + userID).then((user) => user.name);
  },
};
