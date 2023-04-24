let userInput = "";
while (userInput !== "quit") {
userInput = prompt("Please insert favorite team(type 'quit' to exit):");
if (userInput === userInput.toUpperCase()) {
    console.log("You are shouting!");
  } else if (userInput === userInput.toLowerCase()) {
    console.log("You are whispering!");
  } else {
    console.log("You are talking normally.");
  }
}