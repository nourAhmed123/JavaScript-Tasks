var cw;
function openn() {
  cw = open("childwindow.html", "", "width=150,height=150,top=100,left=50");
}

btn = document.getElementById("btn1");

var timer;

var x = 13;

function StartMoveForward() {
  clearInterval(timer);
  cw.focus();
  timer = setInterval(function () {
    cw.moveBy(50, 50);
    x--;

    if (x == 0) {
      StartMovebackward();
    }
    cw.resizeTo(200, 200);
  }, 100);
}

function StartMovebackward() {
  clearInterval(timer);
  cw.focus();
  timer = setInterval(function () {
    cw.moveBy(-50, -50);
    x++;
    if (x == 13) {
      StartMoveForward();
    }
    cw.resizeTo(200, 200);
  }, 100);
}

function stop() {
  clearInterval(timer);
}
