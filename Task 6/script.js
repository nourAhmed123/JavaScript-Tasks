var c;
var age;
var gender;
var cook;
var date = new Date();
var color;
date.setMonth(date.getMonth() + 3);
var genderValue;
function GetGenderValue() {
  var genderRadio = document.getElementsByName("Gender");
  for (var i = 0; i < genderRadio.length; i++) {
    if (genderRadio[i].checked) {
      genderValue = genderRadio[i].value;
    }
  }
  return genderValue;
}
var select;
var value;

function GetColor() {
  select = document.getElementById("Color");
  value = select.options[select.selectedIndex].value;
  return value;
}
function saveUserInfo() {
  c = document.getElementById("usrname").value;
  age = document.getElementById("age").value;
  color = document.getElementById("Color").value;
  document.cookie = "usernameCookie=" + c + ";expires=" + date;
  document.cookie = "AgeCookie=" + age + ";expires=" + date;
  document.cookie = "GenderCookie=" + GetGenderValue() + ";expires=" + date;
  document.cookie = "ColorCookie=" + GetColor();
  +";expires=" + date;

  location.replace("cookie.html");
  console.log(document.cookie);

  getAllCookie();
}

function getAllCookie() {
  var associativeCookie = [];
  var splitCookie = document.cookie.split(";");
  for (i = 0; i < splitCookie.length; i++) {
    associativeCookie[splitCookie[i].split("=")[0].trim()] =
      splitCookie[i].split("=")[1];
  }

  return associativeCookie;
}
var del = new Date();
var cookieVals;
var firstcookieindex;

function GetCookie(Name) {
  var CookieAssociative = getAllCookie();
  return CookieAssociative[Name];
  console.log(CookieAssociative[Name]);
}

function deletecookie(Delete) {
  document.cookie = Delete + " =;expires=" + del;
}
var D;
function deleteAllcookie() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + " =;expires=" + del;
  }
  console.log(document.cookie);
}
function hasCookies(value) {
  cook = document.cookie.match(value);
  if (cook != null) {
    console.log(" Cookie Exist");
  } else {
    console.log(" Cookie Not Exist");
  }
}
