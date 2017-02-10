var input = "javascript is awesome";
var output = "";
for (var i = 0; i < input.length; i++) {
	if (input[i] === "a") {
  console.log(output += "4");
  } else if (input[i] === "e") {
  console.log(output += "3");
  } else if (input[i] === "i") {
  console.log(output += "1");
  } else if (input[i] === "o") {
  console.log(output += "0");
  } else {
  console.log(output += input[i]);
  };
}
document.getElementById("challenge3").innerHTML= output + "!";
