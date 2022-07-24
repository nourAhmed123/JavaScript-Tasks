var timerId;
var i = 0;
function start() {
  clearInterval(timerId);
  timerId = setInterval(function () {
    if (i > 4) {
      document.images[i - 1].src = "marble1.jpg";
      i = 0;
    }
    if (i < 5) {
      if (document.images[i]) {
        document.images[i].src = "marble3.jpg";
      }
      if (document.images[i - 1]) {
        document.images[i - 1].src = "marble1.jpg";
      }
      i++;
    }
  }, 500);
}

function returnimg() {
  clearInterval(timerId);
}
