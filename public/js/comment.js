const addComment = async (event) => {
    event.preventDefault();



    const commentContent = document.querySelector("#comment-content").value.trim();
    const postId = event.target.getAttribute("post-id");
    const userID = event.target.getAttribute("user-id")
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

 