var i = 1;
function next() {
  if (i < 6) {
    i++;
    document.images[0].src = "" + i + ".jpg";
    if (i == 6) {
      i = 1;
    }
  }
}

function pre() {
  if (i > 1) {
    i--;
    document.images[0].src = "" + i + ".jpg";
    if (i == 1) {
      i = 6;
    }
  }
}
var timerId;
function slideshow() {
  clearInterval(timerId);
  timerId = setInterval(function () {
    if (i < 6) {
      i++;
      document.images[0].src = "" + i + ".jpg";
      if (i == 6) {
        i = 0;
      }
    }
  }, 2000);
}
function stop() {
  clearInterval(timerId);
}
