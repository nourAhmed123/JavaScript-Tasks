var str = prompt("Enter the string ");
var cs = confirm("DO you want to ignore difference between letter cases?");

function checkPal(str) {
  for (var i = 0; i <= str.length / 2; i++) {
    if (cs) {
      str = str.toLowerCase();
    }
    if (str[i] != [str[str.length - 1 - i]]) {
      return "Not a palindrome";
    }
  }
  return "It is a palindrome";
}

var Res = checkPal(str);
document.write(Res);
