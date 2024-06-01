const addComment = async (event) => {           // Define an asynchronous function to handle the event of adding a comment
    event.preventDefault();



    const commentContent = document.querySelector("#comment-content").value.trim();  // Get the content of the comment from the input field and remove leading/trailing whitespace
    const postId = event.target.getAttribute("post-id");   // Get the ID of the post where the comment is being added from the event target
    const userID = event.target.getAttribute("user-id")     // Get the ID of the user adding the comment from the event target
    console.log(commentContent, postId, userID)



    if (commentContent) {
        console.log(commentContent)
        console.log(postId)
        // Send a POST request to the API endpoint
        const response = await fetch(`/api/post/${postId}/comments`, {
            method: "POST",
            body: JSON.stringify({ commentContent, postId, userID }),
            headers: { "Content-Type": "application/json" },
        });
        const result = await response.json()
        console.log(result)

        if (response.ok) {
            // If successful, redirect the browser to the post page
            document.location.replace(`/post/${postId}`);
        } else {
            alert(response.statusText);

        }
    }


}
document
    .querySelector(".new-comment-form")
    .addEventListener("submit", addComment);

 