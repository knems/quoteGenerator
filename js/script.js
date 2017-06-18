//Daniel Boisselle
//quotes array holds source and citation of quotes
var body = document.getElementsByTagName('body')[0];

//an aray holding five quote objects containing the source, quote, citation, year, tags and likes
var quotes = [
	{ source: 'Dr. Seuss',
	  quote: 'Don\'t cry because it\'s over, smile because it happened.',
		citation: null,
		year: null,
		tags: "attributed-no-source, cry, crying, experience, happiness, joy, life",
		likes: 176210
	},
	{ source: 'Oscar Wilde',
	  quote: 'Be yourself; everyone else is already taken.',
		citation: null,
		year: null,
		tags: "attributed-no-source, be-yourself, honesty, inspirational, misattributed-oscar-wilde",
		likes: 131605
	},
	{ source: 'Albert Einstein',
		quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
		citation: null,
		year: null,
		tags: "attributed-no-source, human-nature, humor, infinity, philosophy, science, stupidity, universe",
		likes: 118133
	},
	{	source: 'Frank Zappa',
		quote: 'So many books, so little time.',
		citation: null,
		year: null,
		tags: "book, humor",
		likes: 111303
	},
	{	source: 'Mae West',
		quote: 'You only live once, but if you do it right, once is enough.',
		citation: null,
		year: null,
		tags: "humor, life",
		likes: 98260
	}
];

//empty array to hold used quotes from quotes
var usedQuotes = [];

//getRandomQuote function returns an object from quotes array;
function getRandomQuote(){
	if(quotes.length === 0){
		quotes = usedQuotes;
		usedQuotes = [];
	}
	var output = quotes.shift([Math.floor(Math.random() * quotes.length)]);
	usedQuotes.push(output);
	console.log(output);
	return output;
};

//returns a random number
function randomColor(){
	return '#'+Math.random().toString(16).substr(-6);
}

// printRandomQuote function function manipulates the DOM changing the inner HTML to the object reference of the array
// quotes object
function printQuote(){
	window.clearInterval(timer);

	var quote = getRandomQuote();
	var info = "";

	if(quote.citation !== null){
	  info += "<span class='citation'>"+quote.citation+"</span>";
	}
	if (quote.year !== null) {
		info += "<span class='year'>"+quote.year.toString()+"</span>";
	}

	document.getElementsByClassName('quote')[0].innerHTML = quote.quote;
	document.getElementsByClassName('source')[0].innerHTML = quote.source + info;

	body.style.backgroundColor = randomColor()

	timerOut();
};

//A small collection of items, first starting a reference to a 'timer' which holds a setInterval method
//inside timerOut(), when loadQuote button is clicked we clear the interval 'timer' and then call timerOut
//which starts another 30 second wait to call printQuote
var timer;
var timerOut = function() {
	timer = window.setInterval(printQuote, 2000);
}
timerOut();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
