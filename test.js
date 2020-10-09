const fetch = require("node-fetch");

let fetchToDos = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/10");
  let finalData = await response.json();

  console.log("Inseid", finalData);
  return finalData;
};

fetchToDos().then((data1) => {
  console.log("On Call", data1);
});
