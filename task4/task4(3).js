//https://regexr.com/3c53v
var nn;
do {
  nn = prompt("enter your name");
  var nt = /^[a-z]+$/;
} while (!nt.test(nn));

do {
  var phone = prompt("enter your phone number");
  var regxp = /^[0-9]{8}$/;
} while (!regxp.test(phone));

do {
  var Mobile = prompt("Enter your Mobile Number");
  var regx = /^01[012][0-9]{8}$/;
} while (!regx.test(Mobile));

do {
  var Email = prompt("enter your Email");

  var regE = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
} while (!regE.test(Email));

do {
  var favcolor = prompt("choose Color Format 1-RED 2-BLUE 3-GREEN ");
} while (favcolor != "1" && favcolor != "2" && favcolor != "3");

var myDate = new Date();

if (favcolor == 1) {
  document.write('<div id="G1">Welcome Dear Guest :' + nn + "</div>");
  document.write(
    '<div ><span id="G1">your telephone number is  :</span> ' + phone + "</div>"
  );
  document.write('<div id="G1">your Mobile number is : ' + Mobile + "</div>");
  document.write('<div id="G1">your E-mail address is :  ' + Email + "</div>");
  document.write(
    '<div id="G1">Today is :  ' + myDate.toDateString() + "</div>"
  );
} else if (favcolor == 2) {
  document.write('<div id="G2">Welcome Dear Guest ' + nn + "</div>");
  document.write('<div id="G2">your telephone number is   ' + phone + "</div>");
  document.write('<div id="G2">your Mobile number is ' + Mobile + "</div>");
  document.write('<div id="G2">your E-mail address is  ' + Email + "</div>");
  document.write(
    '<div id="G2">Today is :  ' + myDate.toDateString() + "</div>"
  );
} else if (favcolor == 3) {
  document.write('<div id="G3">Welcome Dear Guest ' + nn + "</div>");
  document.write('<div id="G3">your telephone number is   ' + phone + "</div>");
  document.write('<div id="G3">your Mobile number is ' + Mobile + "</div>");
  document.write('<div id="G3">your E-mail address is  ' + Email + "</div>");
  document.write(
    '<div id="G3">Today is :  ' + myDate.toDateString() + "</div>"
  );
} else favcolor = prompt("choose valid  Color  1-RED 2-BLUE 3-GREEN ");
