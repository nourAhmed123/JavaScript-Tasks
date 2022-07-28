var arr = [];

for (var i = 1; i < 6; i++) {
  var n = prompt("Enter  Number " + i + " ");
  arr.push(n);
}

document.write(
  '<div ><span id="G1">you have entered= </span> ' +
    arr[0] +
    "," +
    arr[1] +
    "," +
    arr[2] +
    "," +
    arr[3] +
    "," +
    arr[4] +
    "</div>"
);
document.write(
  '<div ><span id="G1">sorted descending Array= </span> ' + arr.sort()
);
document.write(
  '<div ><span id="G1">sorted ascending Array= </span> ' + arr.sort().reverse()
);
