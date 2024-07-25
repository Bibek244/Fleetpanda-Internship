import { commentSerialize, serialize } from "./serailze.js";

// const baseUrl = "https://jsonplaceholder.typicode.com";

export async function request(url, method, data, type ="post") {
  switch (method) {
    case "POST":
      return handlePostRequest(url, data);

    case "GET":
      return handleGetRequest(url, type);

    default:
      break;
  }
}

async function handlePostRequest(url, data) {
  let responseData;
  await fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => (responseData = data))
    .catch((error) => console.error(error));
  return responseData;
}

async function handleGetRequest(url, type) {
  let responseData;
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => (responseData = data))
    .catch((error) => console.error(error));

  if (type == "post") {
    return serialize(responseData);
  } else  {
    return commentSerialize(responseData);
  }
}
