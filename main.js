let stars = document.getElementById("stars");
let moons = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let future = document.querySelector(".future");
window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moons.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  future.style.fontSize = value + "px";
  if (scrollY >= 71) {
    future.style.fontSize = 71 + "px";
    future.style.position = "fixed ";
    if (scrollY >= 493) {
      future.style.display = "none ";
    } else {
      future.style.display = "block ";
    }
    if (scrollY >= 108) {
      document.querySelector(".main").style.background =
        "linear-gradient(#376281,#10001f)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(#200016,#10001f)";
    }
  }
};
