const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "pass") {
        // If the credentials are valid, show an alert box and reload the page
        alert("You have successfully logged in.");
        location.reload();
    } else {

    }
})