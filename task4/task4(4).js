var arr = [];
var sum = 0;
var m = 1;

for (var i = 1; i < 4; i++) {
  var n = prompt("Enter  Number " + i + " ");
  arr.push(n);
}
var d = arr[0];
for (var j = 0; j < arr.length; j++) {
  sum += +arr[j];
  m *= arr[j];
}
for (var x = 1; x < arr.length; x++) {
  d = d / arr[x];
}

// var m=(n1*n2*n3);
// var d=(n1/n2/n3);
document.write(
  `<div ><span id="G1"> Sum of the 3 values = </span>  ${arr[0]} + ${arr[1]} + ${arr[2]} =  ${sum} </div>`
);
document.write(
  '<div ><span id="G1"> Multiply= </span> ' +
    arr[0] +
    "*" +
    arr[1] +
    "*" +
    arr[2] +
    "=" +
    m +
    "</div>"
);
document.write(
  '<div ><span id="G1"> Division= </span> ' +
    arr[0] +
    "/" +
    arr[1] +
    "/" +
    arr[2] +
    "=" +
    d +
    "</div>"
);
