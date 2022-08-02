var date = new Date();
date.setMonth(date.getMonth() + 3);
var del = new Date();
/*======================================*/
function getGenderValue() {
  var genderValue;
  var genderRadio = document.getElementsByName("gender");
  for (var i = 0; i < genderRadio.length; i++) {
    if (genderRadio[i].checked) {
      genderValue = genderRadio[i].value;
      break;
    }
  }
  return genderValue;
}

function saveUserInfo() {
  var userName = document.getElementById("username").value;
  var userAge = document.getElementById("age").value;
  var userColor = document.getElementById("color").value;
  var userGender = getGenderValue();

  document.cookie = "UserNameCookie=" + userName + ";expires=" + date;
  document.cookie = "AgeCookie=" + userAge + ";expires=" + date;
  document.cookie = "GenderCookie=" + userGender + ";expires=" + date;
  document.cookie = "ColorCookie=" + userColor + ";expires=" + date;

  console.log(document.cookie);
  location.replace("cookie.html");
  getAllCookie();
}

function hasCookies() {
  var userCookieInput = document.getElementById("checkCookie").value;
  var checkCookie = document.cookie.match(userCookieInput);
  var checked;
  if (checkCookie != null) {
    checked = document.getElementById("successAlert").innerHTML = "Exist";
  } else {
    checked = document.getElementById("warningAlert").innerHTML = " Not Exist";
  }
}
/*============================================================================================================= */
function deleteAllcookie() {
  var del = new Date();
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var Pos = cookie.indexOf("=");
    var name = Pos > -1 ? cookie.substring(0, Pos) : cookie;
    document.cookie = name + " =;expires=" + del;
  }
  alert("Cookies Deleted Sucessfully");
  console.log(document.cookie);
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

function deleteCookie() {
  var deleteCookieInput = document.getElementById("deleteCookie").value;
  if (document.cookie.match(deleteCookieInput)) {
    document.cookie = deleteCookieInput + " =;expires=" + del;
    alert(deleteCookieInput + " Deleted Sucessfully");
  } else {
    alert("This Cookie Is not Exist");
  }
}
