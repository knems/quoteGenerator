//Daniel Boisselle
//quotes array holds source and citation of quotes
var quotes = [
	{ source: 'Dr. Seuss',
	  quote: 'Don\'t cry because it\'s over, smile because it happened.'
	},
	{ source: 'Oscar Wilde',
	  quote: 'Be yourself; everyone else is already taken.'
	},
	{ source: 'Albert Einstein',
		quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
	},
	{	source: 'So many books, so little time.',
		quote: 'Frank Zappa'
	},
	{	source: 'You only live once, but if you do it right, once is enough.',
		quote: 'Mae West'
	}
];

//getRandomQuote function returns an object from quotes array;
function getRandomQuote(){
	return quotes[Math.floor(Math.random() * quotes.length)];
};

// printRandomQuote function function manipulates the DOM changing the inner HTML to the object reference of the array
// quotes object
function printQuote(){
	var quote = getRandomQuote();
	document.getElementsByClassName('source')[0].innerHTML = quote.source;
	document.getElementsByClassName('quote')[0].innerHTML = quote.quote;
	//console.log(document.getElementsByClassName('citation')[0].innerHTML);// = quote.citation;
	//console.log(document.getElementsByTagName('span')[1].innerHTML);// = quote.year.toString();
};

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
