// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// A few random quotes hard-coded.

var arrayOfQuotes = [
  {
  quote: "Alas, poor Nupraptor – I knew him well. Well, not really.",
  source: "Legacy of Kain",
  year: 1996
  },
  {
  quote: "Raziel: You said it yourself Kain, your coin only has 2 sides. Kain: Apparently so, but suppose you flip a coin enough times and one day it lands on its edge.",
  source: "Legacy of Kain: Soul Reaver",
  year: "A long time ago..."
  },
  {
  quote: "Kain: Given the choice whether to rule a corrupt and failing empire or to challenge the Fates for another throw, a better throw against one's destiny... what was a king to do? But does one ever truly have a choice? One can only match move by move the machinations of Fate and thus defy the tyrannous stars.",
  source: "a better throw against one's destiny",
  citation: "string but just a small part of it",
  },
  {
  quote: "Sarafan: Surrender, fiend, and we will promise you an easy death. Kain: I could promise you the same, but it would be a lie.",
  source: "Legacy of Kain: Defiance",
  citation: "I could promise you the same, but it would be a lie.",
  },
  {
  quote: "Kain: The first bitter taste of that terrible illusion... Hope",
  source: "Legacy of Kain: Defiance",
  },
]

// generates a random-number based on the arrayOfQuotes' length. Then returns the quote with that number as an index.

function getRandomQuote(){
  var randomNumber = Math.floor((Math.random() * arrayOfQuotes.length) + 0);
  console.log(randomNumber);
  return arrayOfQuotes[randomNumber];
}

// prints a string containing the quote information to the DOM.

function printQuote(){
  var randomQuote = getRandomQuote();
  var quoteString = "<p class='quote'>" + randomQuote.quote + "</p>"
  quoteString += "<p class='source'>" + randomQuote.source
  if (randomQuote.citation !== undefined ){
    quoteString += "<span class='citation'>" + randomQuote.citation + "</span>"
  }
  if (randomQuote.year !== undefined ){
    quoteString += "<span class='year'>" + randomQuote.year + "</span> </p>"
  }
  document.getElementById('quote-box').innerHTML = quoteString;
}
