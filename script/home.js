document.addEventListener('DOMContentLoaded', function(){
    const existingData = sessionStorage.getItem("token");
    if (!existingData) {
      window.location = "login.html"
    }
    const logout = document.querySelector('#logout');
    logout.addEventListener('click', function(){
        sessionStorage.removeItem('token');
        window.location.reload(true);
    })
console.log('fetch');
    fetch("https://reqres.in/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const result =document.querySelector('.result');
        data.data.forEach(item => {
          const div = document.createElement('div');
          div.className = 'cards';
          const div1 = document.createElement('div');
          div1.className = 'sub-div';
          const span1 = document.createElement('span');
          span1.textContent = `id: ${item.id}`;
          div1.appendChild(span1);
          const span2 = document.createElement('span');
          span2.textContent = `Email: ${item.email}`;
          div1.appendChild(span2);
          const span3 = document.createElement('span');
          span3.textContent = `Name: ${item.first_name} ${item.last_name}`;
          div1.appendChild(span3);
          div.appendChild(div1);
          const div2 = document.createElement('div')
          div2.className = 'sub-div';
          const img = document.createElement('img');
          img.src = item.avatar;
          div2.appendChild(img);
          div.appendChild(div2);
          result.appendChild(div);
          

        })
      })
      .catch((err) => console.log(err));
  })



