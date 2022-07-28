function gender() {
  console.log(document.cookie);
  getAllCookie();
  VisitCounter();
  if (GetCookie("GenderCookie") === "female") {
    document.images[0].src = "2.jpg";
  }

  document.getElementsByClassName("card-title")[0].innerHTML =
    "Welcome  " +
    "<span style= color:" +
    GetCookie("ColorCookie") +
    ">" +
    GetCookie("usernameCookie") +
    "</span>" +
    "  You have Entered this Website   " +
    "<span style= color:" +
    GetCookie("ColorCookie") +
    ">" +
    visits +
    "</span>" +
    " times :)";

  console.log(GetCookie("ColorCookie"));

  console.log(document.getElementsByClassName("card-title")[0].innerHTML);
}

var visits = GetCookie("CounterCookie");
function VisitCounter() {
  visits++;
  document.cookie = "CounterCookie=" + visits + ";expires=" + date;

  return visits;
}
