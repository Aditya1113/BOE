let api = "https://jsonplaceholder.typicode.com/users";

//used to consume api (using callback)
// let getRemoteData = (api) => {

//   fetch(api)
//     .then((response) => response.json())
//     .then((data) => {
//       appendToHtml(data);
//     })
//     .catch((error) => console.log(error));
// };

//used to consume api (using async/await)
let getRemoteData = async (api) => {
  let response = await fetch(api);

  let result = await response.json();

  appendToHtml(result);
};

getRemoteData(api);

//used to display data in a tabular format
let appendToHtml = (data) => {
  for (let users of data) {
    let tr = document.createElement("tr");
    let td_1 = document.createElement("td");
    let td_2 = document.createElement("td");
    let td_3 = document.createElement("td");

    td_1.innerHTML = `${users.name}`;
    td_2.innerHTML = `${users.email}`;
    td_3.innerHTML = `${users.username}`;

    tr.appendChild(td_1);
    tr.appendChild(td_2);
    tr.appendChild(td_3);

    document.getElementById("myTable").appendChild(tr);
  }
};
