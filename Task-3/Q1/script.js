var response = prompt("Enter Your Message");
var i = 1;
while (i < 7) {
  //   document.write("<h" + i + ">", response);
  var result = document.createElement("h" + i);

  result.innerText = response;
  document.body.appendChild(result); //3shan a-append fel body mehtaga a3mel el script tag fel body mesh fo2

  i++;
}
