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
      //
      fetch("https://reqres.in/api/register/", {
        method: "POST",
        body: JSON.stringify(formDataObj),
        headers: {
          'Content-Type': 'application/json' 
        }
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.id);
          sessionStorage.setItem("token", data.token );
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
