alert(
  "you should enter string then enter the character you want to count and choose whether you want to ignore case sensitivity or not and it will return to you the no of apeearance of this character"
);
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
