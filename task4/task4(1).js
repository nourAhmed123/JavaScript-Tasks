var s = prompt("Enter the string ");
var c = prompt("which string do you want to count");
var UP = confirm("DO you want to ignore difference between letter cases");
var vo = [];
var lc = 0;

for (var i = 0; i <= s.length; i++) {
  if (UP) {
    //nnnNN=5
    s = s.toLowerCase();
    c = c.toLowerCase();
  }
  if (s.charAt(i) == c)
    //nnnNN=2
    lc += 1;
}
document.write(lc);
