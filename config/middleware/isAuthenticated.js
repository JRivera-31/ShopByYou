// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
    // If the user is logged in, continue with the request to the restricted route
    if (req.user) {
      return next();
      // if a user chooses guest then they can continue
    } else {
        (req.guest)
    } return next();
  

    return res.redirect("/");
  };
  