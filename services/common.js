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

  // TODO : this is temporary token for testing without cookie
  // dummytoken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWZiZDE0YzgxNzNmM2FkZDU4YTM0ZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg5MjM4ODA0fQ.4ozn_-1MvygfZB-ZzxTiy9I5Z87h_T4OsXphhie85xc";
  // admintoken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWZiZGE2ZjBkODYyZjU1YjBmZDNkMyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg5MjM4OTUwfQ.a5itklafzR0m2qvRKkvsSr77WhWyJO2SjDMuhBq1adE";

  // return dummytoken;
  // return admintoken;
};
