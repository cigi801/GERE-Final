
//Generates random quote


const quotes = ["Look deep into nature, and then you will understand everything better.   " + "   -Albert Einstein", "Leave the road, take the trails.   " + "   -Pythagoras", "I go to nature to be soothed and healed, and to have my senses put in order.  " + "   -John Burroughs", "Spring is nature’s way of saying, ‘Let’s party!’   " + "   -Robin Williams", "By discovering nature, you discover yourself.  " + "   -Maxime Lagacé", "Time spent amongst trees is never wasted time.  " + "   -Katrina Mayer", "Between every two pines there is a doorway to a new world. " + "  -John Muir", "Going to the mountains is like going home.  " + "  -John Muir", "I like this place and could willingly waste my time in it. -William Shakespeare", "Should you shield the canyons from the windstorms you would never see the true beauty of their carvings.  " + "  -Elisabeth Kübler-Ross", "If you truly love nature, you will find beauty everywhere.  " + "  -Laura Ingalls Wilder", "In every walk with nature one receives far more than he seeks.  " + "  -John Muir"];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


function quote() {
    let quote = document.getElementById('quote').innerHTML = [randomQuote];
}



