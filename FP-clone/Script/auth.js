export function auth(){
  const existingData = sessionStorage.getItem("token");
  return existingData;
}