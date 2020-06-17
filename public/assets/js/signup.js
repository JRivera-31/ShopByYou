$(function() {
    // Getting references to our form and input
    const signUpForm = $("#signupForm");
    const emailInput = $("#email-input");
    const passwordInput = $("#password-input");
    const verPass = $("#verPass")
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      let userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }

      // Verify password
      if (userData.password != verPass.val().trim()) {
        return alert("Passwords don't match!")
      }

      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser( email, password) {
      $.post("/api/signup", {
        email: email,
        password: password
      })
        .then(function(data) {
          console.log(data);
          window.location.replace("/shop");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }

  });
  