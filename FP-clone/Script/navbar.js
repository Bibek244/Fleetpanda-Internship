import { auth } from "./auth.js";

const page = document.title;

document.addEventListener("DOMContentLoaded", function () {
  let image;
  let loginLink;
  let isLogin;
  let hidden;

  if (page == "FleetPanda") {
    image = "Image/fleedpanda-logo.png";
    loginLink = "App";
  } else {
    image = "../Image/fleedpanda-logo.png";
    loginLink = "../App";
  }
  !auth()
    ? (isLogin = `<li><a href="${loginLink}/Login.html">Login</a></li>
    <li><a href="${loginLink}/Register.html">Signup</a></li>`)
    : (isLogin = `<li><a id='logout'>Logout</a></li>`);

  !auth() ? (hidden = "hidden") : (hidden = "");

  let html = `<header>
  <div class="about">
    Look what top fuel marketers say about FleetPanda
    <a href="#">Know More →</a>
  </div>
</header>
<nav>
  <div class="logo">
    <img
      src="${image}"
      alt="logo"
      width="219"
      height="51"
    />
  </div>
  <ul>
    <li><a href="../index.html">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href='${loginLink}/Posts.html' ${hidden}>Blogs</a></li>
      ${isLogin}
  </ul>
  </nav>`;

  document.body.insertAdjacentHTML("afterbegin", html);
  // debugger
  const logout = document.querySelector("#logout");
  logout &&
    logout.addEventListener("click", function () {
      sessionStorage.clear();
      window.location.reload();
    });
});
