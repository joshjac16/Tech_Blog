const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const userName = document.querySelector("#userName-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if (userName && password) {
        // Send a POST request to the API endpoint
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ userName, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace("/profile");
        } else {
            alert("Incorrect password or username");
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    // Get the values of the name and password input fields and remove leading/trailing whitespace
    const name = document.querySelector("#name-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();


    // Check if both name and password are provided
    if (name && password) {    

        // Send a POST request to the "/api/users" endpoint with user data
        const response = await fetch("/api/users", { 
            method: "POST",
            body: JSON.stringify({ userName: name, password }),
            headers: { "Content-Type": "application/json" },
        });

         // Check if the request was successful
        if (response.ok) {

            // Redirect the user to the profile page upon successful signup
            document.location.replace("/profile");
        } else {
            alert(response.statusText);
        }
    }
};
// Attach an event listener to the login form
document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);
    
// Attach an event listener to the signup form
document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);
