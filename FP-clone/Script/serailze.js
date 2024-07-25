export async function serialize(data) {
  let finalMappedData;
  if (Array.isArray(data)) {
    finalMappedData = data.map((datum) => {
      let mappedData = {};
      mappedData["postId"] = datum["id"];
      mappedData["userId"] = datum["userId"];
      mappedData["blogTitle"] = datum["title"];
      mappedData["blogDescription"] = datum["body"];
      return mappedData;
    });
  } else {
    finalMappedData = {
      userId: data.postId,
      blogTitle: data.title,
      blogDescription: data.body,
    };
  }
  return finalMappedData;
}

export async function commentSerialize(data) {
  let finalMappedData = data.map((datum) => {
    let mappedData = {};
    mappedData["postId"] = datum["id"];
    mappedData["userId"] = datum["userId"];
    mappedData["userName"] = datum["name"];
    mappedData["userEmail"] = datum["email"];
    mappedData["commentBody"] = datum["body"];
    return mappedData;
  });
  return finalMappedData;
}
