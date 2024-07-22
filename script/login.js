document.addEventListener("DOMContentLoaded", function () {
  const existingData = sessionStorage.getItem("token");
  if (existingData) {
    window.location = "Home.html"
  }
  let submit = document.querySelector("#form-submit");

  submit.addEventListener("click", function () {
    event.preventDefault();
    let name = document.querySelector("#name").value.trim();

    let password = document.querySelector("#password").value.trim();

    isValid = validatePassword(password) && validateName(name);
    if (isValid) {
      //   form.submit();
      const form = document.querySelector("#myform");
      const formData = new FormData(form);
      const formDataObj = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });
   
      fetch("https://reqres.in/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObj)
      })
        .then((res) => res.json())
        .then((data) => {
            sessionStorage.setItem("token", data.token);
            window.location.reload(true);
        })
        .catch((err) => console.log(err));
    }
  });
});
function validateName(name) {
  return true;
}
function validatePassword(password) {
  return true;
}
// function validateLogin(response, loginName, loginPassword) {
//   const user = response.find(
//     (item) => item.name === loginName && item.password === loginPassword
//   );
//   if (user) {
//     console.log(`Login successful for user: ${user.name}`);
//     sessionStorage.setItem("user", user.id);
//     window.location.reload(true);
//   } else {
//     console.log("Invalid name or password.");
//   }
// }
