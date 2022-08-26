console.log("%c HI", "color: firebrick");
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
document.addEventListener("DOMContentLoaded", function () {
  fetchData();
  fetchBreed();
});

const fetchData = () => {
  const imgDiv = document.querySelector("#dog-image-container");
  fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
      data.message.forEach((dat) => {
        imgDiv.innerHTML += `
         <img src='${dat}' alt="">
        `;
      });
      //   for(let i=0; i<)
    });
};
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const fetchBreed = () => {
  const ul = document.querySelector("#dog-breeds");
  fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
      const breeds = Object.keys(data.message);
      console.log(breeds);
      breeds.forEach((dat) => {
        ul.innerHTML += `
        <li id='breed'>${dat}</li>
        `;
      });
      const item = ul.querySelectorAll("#breed");
      item.forEach((ite) => {
        ite.addEventListener("click", function (e) {
          e.target.style.color = "green";
        });
      });
    });
  const drop = document.querySelector("#breed-dropdown");
  drop.addEventListener("click", function (e) {
    // breeds.filter((breed) => breed.includes(e.target.value));
    // const getBreed = (breeds, e) => {
    //   breeds.filter((breed) => breed.startsWith(e.target.value));
    // };
    alert(123);
    console.log(e.target.value);
  });
};
