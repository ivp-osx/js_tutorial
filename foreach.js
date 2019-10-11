let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
  console.log(element);
});

let sentence = "To be, or not to be, that is the question:";
Array.from(sentence).forEach(function(character) {
  console.log(character);
});