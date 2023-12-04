document.addEventListener("DOMContentLoaded", function () {
  let addButton = document.querySelector("#add_button");
  let fullNameInput = document.querySelector("#full_name");
  let commentInput = document.querySelector("#comment");

  addButton.addEventListener("click", addComment);

  fullNameInput.addEventListener("input", enableCommentButton);
  commentInput.addEventListener("input", enableCommentButton);

  document.querySelector("#button_asc").addEventListener("click", 
  sortCommentsAscending);
  document.querySelector("#button_desc").addEventListener("click", 
  sortCommentsDescending);
});

function enableCommentButton() {
  let fullNameInput = document.querySelector("#full_name");
  let commentInput = document.querySelector("#comment");
  let addButton = document.querySelector("#add_button");

  addButton.disabled = fullNameInput.value.trim() === "" || 
  commentInput.value.trim() === "";
}

function addComment() {
  let fullNameInput = document.querySelector("#full_name");
  let commentInput = document.querySelector("#comment");
  let itemList = document.querySelector("#comment_list");

  let fullName = fullNameInput.value;
  let comment = commentInput.value;

  let currentDate = new Date();

  let newComment = {
    fullName: fullName,
    comment: comment,
    date: currentDate
  };

  let listItem = document.createElement("li");
  listItem.textContent = newComment.fullName; 
  let commentText = document.createElement("p"); 
  commentText.textContent = newComment.comment;

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    itemList.removeChild(listItem);
  });
  listItem.appendChild(commentText);
  listItem.appendChild(deleteButton);
  itemList.appendChild(listItem);

  fullNameInput.value = "";
  commentInput.value = "";
  enableCommentButton();
}

// asc
function sortCommentsAscending() {
  let itemList = document.querySelector("#comment_list");
  let comments = Array.from(itemList.children);

  comments.sort((a, b) => {
    let fullNameA = a.textContent;
    let fullNameB = b.textContent;
    return fullNameA.localeCompare(fullNameB);
  });

  itemList.innerHTML = "";
  comments.forEach(comment => {
    itemList.appendChild(comment);
  });
}

// desc
function sortCommentsDescending() {
  let itemList = document.querySelector("#comment_list");
  let comments = Array.from(itemList.children);

  comments.sort((a, b) => {
    let fullNameA = a.textContent;
    let fullNameB = b.textContent;
    return fullNameB.localeCompare(fullNameA);
  });

  itemList.innerHTML = "";
  comments.forEach(comment => {
    itemList.appendChild(comment);
  });
}
