// Reverses a string.
function reverse(string) {
  return string.split("").reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
  // return string === reverse(string); 
}


// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
  }
}


// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Makes the phrase LOUDER.
  this.louder = function louder() {
    let processedContent = this.content.toUpperCase();
    return processedContent;
  };
}


// Moving processedContent into a method:

// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }
}


// Defines a TranslatedPhrase object with a Phrase prototype.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
}

TranslatedPhrase.prototype = new Phrase();







