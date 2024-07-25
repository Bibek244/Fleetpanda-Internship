import { auth } from "./auth.js";
import { request } from "./fetch.js";

const LOGIN_URL = "https://reqres.in/api/login/";

document.addEventListener("DOMContentLoaded", function () {
  const isLogin = auth();
  if (isLogin) {
    window.location.href = "Posts.html";
  }

  let submit = document.querySelector("#form-submit");

  submit.addEventListener("click", async function () {
    event.preventDefault();
    let name = document.querySelector("#name").value.trim();
    let password = document.querySelector("#password").value.trim();

    let isValid = validatePassword(password) && validateName(name);
    if (isValid) {
      //   form.submit();
      const form = document.querySelector("#myform");
      const formData = new FormData(form);
      const formDataObj = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });
      let result = await request(
        LOGIN_URL,
        "POST",
        JSON.stringify(formDataObj)
      );
      // console.log(result);
      if(result.token){
        sessionStorage.setItem("token", result.token);
        window.location.reload(true);
      }
    }
  });
});

function validateName(name) {
  return true;
}
function validatePassword(password) {
  return true;
}

