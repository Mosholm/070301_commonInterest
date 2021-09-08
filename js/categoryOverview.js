window.addEventListener("DOMContentLoaded", init);

/*function gotData(data) {
  const myArray = [];
  data.forEach((el) => {
    myArray.push(el.beertype);
  });
  //const data2 = myArray.filter(distinct);
  const data2 = [...new Set(myArray)];
  console.log(data2);
  data2.forEach(showCategoryNav);

  data.forEach(showAll);
}

function showCategoryNav(beer) {
  //console.log(beers.beertype);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("a").textContent = beer;
  copy.querySelector("a").href = `productList.html?beertype=${beer}`;

  const cateParent = document.querySelector("#beer-cate-nav");
  const elemParent = cateParent.querySelector("ul");
  elemParent.appendChild(copy);
}*/

function init() {
  const allbtns = document.querySelectorAll(".button");
  allbtns.forEach((btn) => {
    //console.log(btn);
    btn.addEventListener("click", changeUrl);
  });
}
function changeUrl(event) {
  event.preventDefault();
  const filter = event.target.dataset.type;
  console.log(filter);
  location.href = "productList.html?id=" + filter;
}

/*function gotData(pilsnerBeer) {
  const show = [pilsnerBeer[4], pilsnerBeer[8], pilsnerBeer[11]];
  //console.log(pilsnerBeer);
  //console.log(show);
  for (let i = 0; i < show.length; i++) {
    const template = document.querySelector(".pilnser").content;
    const copy = template.cloneNode(true);
    const parent = document.querySelector(".pilsner");

    copy.querySelector(".").textContent = show[i].pilsner;

    parent.appendChild(copy);
  }
}

jQuery(".pilsner").click(function () {
  $(this).data("clicked", true);
});

if (jQuery(".pilsner").data("clicked")) {
  show;
}*/
