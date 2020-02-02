function responsiveMenu() {
    var x = document.getElementById("weatherNav");
    var y = document.getElementById("footer");
    if (x.className === "hidden") {
      x.className = "shown";
      y.className = "large-footer";
    } else {
      x.className = "hidden";
      y.className = "small-footer";
    }
  } 