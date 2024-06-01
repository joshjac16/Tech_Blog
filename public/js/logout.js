const logout = async () => {

    // Send a POST request to the "/api/users/logout" endpoint
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  // Check if the logout request was successful
  if (response.ok) {
    document.location.replace("/");
  } else {
    // Display an alert with the error message if the request was not successful
    alert(response.statusText);
  }
};


// Attach an event listener to the logout button
document.querySelector("#logout").addEventListener("click", logout);
