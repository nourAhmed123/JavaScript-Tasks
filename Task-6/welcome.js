var visits = getCookie("counterCookie");

function getCookie(Name) {
  var CookieAssociative = getAllCookie();
  return CookieAssociative[Name];
}

function gender() {
  console.log(document.cookie);
  getAllCookie();
  if (getCookie("GenderCookie") === "female") {
    document.images[0].src = "2.jpg";
  }

  VisitCounter();
  document.getElementsByClassName("card-title")[0].innerHTML =
    "Welcome  " +
    "<span style= color:" +
    getCookie("ColorCookie") +
    ">" +
    getCookie("UserNameCookie") +
    "</span>" +
    "  You have Entered this Website   " +
    "<span style= color:" +
    getCookie("ColorCookie") +
    ">" +
    visits +
    "</span>" +
    " times :)";
}

function VisitCounter() {
  console.log(visits);
  if (!visits) {
    visits = 0;
  }
  visits++;
  document.cookie = "counterCookie=" + visits + ";expires=" + date;
}
