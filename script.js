function settingsMenuToggle() {
  document.querySelector(".settings-menu").style.cssText = "max-height: 450px";
}

function up() {
  document.querySelector(".settings-menu").style.cssText = "max-height: 0";
}
// var darkButton = document.querySelector(".darkTheme");

function DarkMode() {
  var darkButton = document.body;
  // var darkSidebar_left = document.getElementsByClassName('left-sidebar')
  darkButton.classList.toggle("darkmode");
  document
    .getElementsByClassName("left-sidebar")
    .classList.toggle("left-sidebar-mode");
}
// const api_url = "https://employeedetails.free.beeceptor.com/my/api/path";

// Defining async function
// async function getapi(url) {
//   // Storing response
//   const response = await fetch(url);

// Storing data in form of JSON
//   var data = await response.json();
//   console.log(data);
//   if (response) {
//     hideloader();
//   }
//   show(data);
// }
// Calling that async function
// getapi(api_url);
async function callapi() {
  fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2022-10-05&sortBy=publishedAt&apiKey=e5feeb7605db48fe96b936f0c6484290"
  )
    .then((response) => response.json())
    .then((data) => console.log(data.status));
}
callapi();
// e5feeb7605db48fe96b936f0c6484290
// function fetchData() {
//   fetch("https://reqres.in/api/users")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.data);
//       const html = articles.articles.map((user) => {
//         return `<img src="${user.avatar}" alt="${user.firt_name}"`;
//       });
//     });
// }
