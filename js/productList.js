const url = "https://kea21s-3d40.restdb.io/rest/beers";
const option = {
  headers: {
    "x-apikey": "61360fcc43cedb6d1f97ed46",
  },
};

const urlParams = new URLSearchParams(window.location.search);
let filter = urlParams.get("id");
window.addEventListener("DOMContentLoaded", init);

function init() {
  const allbtns = document.querySelectorAll(".button");
  allbtns.forEach((btn) => {
    btn.addEventListener("click", btnClick);
  });
  getData();
}
function btnClick(event) {
  event.preventDefault();
  filter = event.target.dataset.type;
  getData();
}

function getData() {
  //console.log(filter);
  fetch(url, option)
    .then((res) => res.json())
    .then((data) => {
      gotData(data);
    });
}
function gotData(data) {
  const parent = document.querySelector(".infoAllBeer");
  parent.innerHTML = "";
  data.forEach((obj) => {
    if (filter == obj.type) {
      const temp = document.querySelector("template");
      const copy = temp.cloneNode(true).content;

      copy.querySelector(".name").textContent = obj.name;
      copy.querySelector(".pro").textContent = obj.procentage;
      copy.querySelector(".land").textContent = obj.country;
      copy.querySelector(".decrip").textContent = obj.info;
      copy.querySelector(".brew").textContent = obj.brewery;
      copy.querySelector(".pri").textContent = obj.price;
      copy.querySelector(".tbeer").textContent = obj.beertype;
      copy.querySelector(".si").textContent = obj.size;

      //wont show img? https://rdb-simpledb.restdb.io/media/(id or filename)?key=22631469345172666884
      copy.querySelector(".beerimg").src = obj.url;

      parent.appendChild(copy);
    }
  });
}

/*fetch(url, option)
  .then((res) => res.json())
  .then((data) => showBeer(data));

function showBeer(beers) {
  console.log(beers);
  document.querySelector(
    ".pilsner"
  ).src = `https://kea21s-3d40.restdb.io/rest/beers?beertype=pilsner/${beers.img}`;
}*/
