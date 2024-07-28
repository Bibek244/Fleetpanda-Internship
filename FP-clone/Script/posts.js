import {auth} from './auth.js';
import { request } from './fetch.js';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts/';

document.addEventListener("DOMContentLoaded", function () {
  const isLogin =  auth();
  if (!isLogin) {
    window.location.href= "login.html";
  }

  request(POST_URL,"GET")
    .then((data) => {
      const result = document.querySelector(".result");
      data.forEach((item) => {
        const div = document.createElement("div");
        div.className = "cards";
        div.id = item.id;

        const close = document.createElement("button");
        close.className = "btn";
        close.innerText = "Read More";

        
        close.addEventListener("click", async function () {
          window.location = (`Post.html?id=${item.postId}`);
        });
        
        const div1 = document.createElement("div");
        div1.className = "sub-div";
        const span1 = document.createElement("span");
        span1.textContent = `Blog number: ${item.postId}`;
         span1.className = 'span-id' ;
        div1.appendChild(span1);
        const span2 = document.createElement("span");
        span2.textContent = `${item.blogTitle}`;
        span2.className = 'span-title' ;

        div1.appendChild(span2);
        const span3 = document.createElement("span");
        span3.textContent = ` ${item.blogDescription} `;
        span3.className = 'span-body' ;

        div1.appendChild(span3);
        div.appendChild(div1);
      
        div.append(close);
        result.appendChild(div);
      });
    })
    .catch((err) => console.log(err));
});