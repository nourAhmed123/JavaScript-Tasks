var narr = [];
var z;
var sum = 0;
alert(
  "This Script should takes from you n values and returns their sum , it will stop recieving values when you enter 0 or their sum exceeds 100"
);
while (z != 0 && sum <= 100) {
  z = prompt("Enter a number");
  if (isNaN(z)) {
    alert("please enter a number");
  } else narr.push(z);

  for (var j = 0; j < narr.length; j++) {
    sum += +narr[j];
  }
}
alert("sum=" + sum + "");
