import {auth} from './auth.js';
import { request } from './fetch.js';
import { validateName } from './script.js';

const REGISTER_URL = "https://reqres.in/api/register/";

document.addEventListener("DOMContentLoaded", function () {
  const isLogin =  auth();
  if (isLogin) {
    window.location.href = "Posts.html";
  }
  let submit = document.querySelector("#form-submit");

  submit.addEventListener("click", function () {
    event.preventDefault();
    let name = document.querySelector("#name").value.trim();
    let password = document.querySelector("#password").value.trim();

    isValid = (password !== "") && validateName(name);
    if (isValid) {
      //   form.submit();
      const form = document.querySelector("#myform");
      const formData = new FormData(form);
      const formDataObj = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });

      let result = request(REGISTER_URL,"POST",formDataObj)

    }
  });
});