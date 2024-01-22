//create an array of 10 quotes
const quotes = [
    "The impediment to action advances action. What stands in the way becomes the way.",
    "You have power over your mind - not outside events. Realize this, and you will find strength.",
    "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
    "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
    "Accept whatever comes to you woven in the pattern of your destiny, for what could more aptly fit your needs?",
    "Waste no more time arguing about what a good man should be. Be one.",
    "The best revenge is to be unlike him who performed the injustice.",
    "Do not act as if you had ten thousand years to throw away. Death stands at your elbow. Be good for something while you live and it is in your power.",
    "Look within. Within is the fountain of good, and it will ever bubble up, if thou wilt ever dig.",
    "How much more grievous are the consequences of anger than the causes of it."
]

const btn = document.querySelector('.btn')
const quoteContainer = document.querySelector('.quote-container')

const generateQuote = ()=>{
//clear quote
quoteContainer.innerHTML = ''
//select a random quote
const randomizeQuote = ()=>{
    return quotes[Math.floor(Math.random()*quotes.length)];

};

const randomQuote = randomizeQuote();
//add it to the dom


const postQuote = ()=>{
    const paragraph = document.createElement('p')
    paragraph.innerText = `${randomQuote}` 
    quoteContainer.appendChild(paragraph)  
}

postQuote();
}


btn.addEventListener('click', generateQuote)