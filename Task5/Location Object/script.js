let loc;
loc = document.location;
console.log(document.location.search);
var n = loc.search;
var search = location.search.substring(1);
console.log(
  JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
);
var obj = JSON.parse(
  '{"' +
    decodeURI(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"') +
    '"}'
);
document.write("Welcome " + obj.name + "<br>");
document.write("your job Title is : " + obj.jobTitle + "<br>");

document.write(n);
