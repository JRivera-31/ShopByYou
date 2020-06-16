$(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(req, res) {
        res.json({
            email: email,
        })
    });

  });
  