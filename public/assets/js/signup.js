$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("#signupForm");
    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var emailInput = $("#email-input");
    var passwordInput = $("#password-input");
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        first_name: firstName.val().trim(),
        last_name: lastName.val().trim(),
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(first, last, email, password) {
      $.post("/api/signup", {
        first_name: first,
        last_name: last,
        email: email,
        password: password
      })
        .then(function(data) {
          window.location.replace("/member-shop");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  