const newFormHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector("#post-name").value.trim();
  const postContent = document.querySelector("#post-desc").value.trim();

  if (postTitle && postContent) {
    const response = await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({ postTitle, postContent }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

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

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".post-list")
  .addEventListener("click", delButtonHandler);
