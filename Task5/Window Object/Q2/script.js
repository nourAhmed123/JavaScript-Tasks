var cw;
var timer;
var i = 0;
var string = ["H", "E", "L", "L", "O"];

function openn() {
  cw = open("childwindow.html", "", "width=150,height=150,top=100,left=50");
  timer = setInterval(function () {
    if (i < string.length + 1) {
      cw.focus();
      cw.document.write(string[i]);
      i++;
    }
  }, 500);
  timer = setTimeout(function () {
    cw.close();
  }, 2500);
}
