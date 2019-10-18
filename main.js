// let Phrase = require("ivp-palindrome");

// let string = prompt("Please enter a string for palindrome testing:");
// let phrase = new Phrase(string);

// if (phrase.palindrome()) {
//   alert(`"${phrase.content}" is a palindrome!`);
// } else {
//   alert(`"${phrase.content}" is not a palindrome.`)
// }



let Phrase = require("ivp-palindrome");

function palindromeTester(event) {
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);
  // let string = prompt("Please enter a string for palindrome testing:");
  // let phrase = new Phrase(string);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
});