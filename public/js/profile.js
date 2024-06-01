const newFormHandler = async (event) => {
    event.preventDefault();

    // Get the values of the post title and content input fields and remove leading/trailing whitespace
    const postTitle = document.querySelector("#post-name").value.trim();
    const postContent = document.querySelector("#post-desc").value.trim();

    // Check if both post title and content are provided
    if (postTitle && postContent) {
        // Send a POST request to the "/api/post" endpoint with post data
        const response = await fetch(`/api/post`, {
            method: "POST",
            body: JSON.stringify({ postTitle, postContent }), // Convert post data to JSON format
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Check if the request was successful
        if (response.ok) {

            // Redirect the user to the profile page upon successful post creation
            document.location.replace("/profile");
        } else {
            alert("Failed to create project");
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
        const id = event.target.getAttribute("data-id");

        // Send a DELETE request to the "/api/post/:id" endpoint to delete the post
        const response = await fetch(`/api/post/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            document.location.replace("/profile");
        } else {
            alert("Failed to delete post");
        }
    }
};



// Attach an event listener to the new post form for form submission
document
    .querySelector(".new-post-form")
    .addEventListener("submit", newFormHandler);

// Attach an event listener to the post list for click events on delete buttons
document
    .querySelector(".post-list")
    .addEventListener("click", delButtonHandler);
