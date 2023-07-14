const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }

  return token;

  // // TODO : this is temporary token for testing without cookie
  // dummytoken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWZiZDE0YzgxNzNmM2FkZDU4YTM0ZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg5MzI0MzA4fQ.jZ8Whzw3ZhDpBhXPtIcAQDSzwJ8xFYEm3ITv0v0Jgr8";
  // admintoken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWZiZGE2ZjBkODYyZjU1YjBmZDNkMyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4OTMyNDI1N30.53SUu1AahCfjBN4LrgYX5IVY4uVPJiywxnLj2YgbOJU";

  // return dummytoken;
  // return admintoken;
};
