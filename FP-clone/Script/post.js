import { auth } from "./auth.js";
import { request } from "./fetch.js";
import { fetchComments } from "./comments.js";


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const BASE_URL = "https://jsonplaceholder.typicode.com/"
const POST_URL = `${BASE_URL}posts/`;
const COMMENT_URL = `${POST_URL}${id}/comments`;



document.addEventListener("DOMContentLoaded", async function () {
  const isLogin = auth();
  if (!isLogin) {
    window.location.href = "login.html";
  }

  
  const title = document.querySelector("#post-title");
  const body = document.querySelector("#post-body");
  // const user = document.querySelector('#post-user')
  
  const postData = await request(POST_URL + id, "GET");
  console.log(postData)

  
  // user.textContent = postData.userId;
  title.textContent = postData.blogTitle;
  body.textContent = postData.blogDescription;

  const commentData = await request(COMMENT_URL, "GET", null, "comments");
  await fetchComments(commentData);

});
