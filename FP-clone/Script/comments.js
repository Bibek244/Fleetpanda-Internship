export async function fetchComments(comments) {
  const commentBox = document.querySelector("#comment-box");

  comments.forEach((item) => {
    const comment = document.createElement("div");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");

    comment.className = "comment";
    div1.className = "sub-div";
    div2.className = "sub-div";
    div1.style.width = "fit-content";
    div2.style.backgroundColor = "white";
    div2.style.borderWidth = "2px";
    div2.style.borderRadius = "5px";
    div2.style.padding = "15px";
    div2.style.width = "70vb";
    div2.style.margin = "15px";

    const userName = document.createElement("span");
    userName.className = "user-name";

    const commentBody = document.createElement("span");
    commentBody.classList = "comment-body";
    let user;
    if (item.userName.length > 15) {
      user = item.userName.slice(0, 15) + "...";
    } else {
      user = item.userName;
    }

    userName.textContent = "comment by:" + " " + user;

    div1.appendChild(userName);
    commentBody.textContent = item.commentBody;

    div2.appendChild(commentBody);

    comment.appendChild(div1);
    comment.appendChild(div2);
    commentBox.appendChild(comment);
  });
}
