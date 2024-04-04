const counterElem = document.querySelector(".counter");
const BarElem = document.querySelector(".loading-bar_frant");

// counterElem.innerHTML = "20%"

let index = 0;

change();

function change() {

    counterElem.innerHTML = index + "%";
    BarElem.style.width = index + "%";

    index++;
    if (index <= 100) {
    setTimeout(change,30);

  }
}
