// your code goes in here
const quotes = [
    {
        quote: 'I have no special talent. I am only passionately curious',
        author: 'Albert Einstein'
    },
    {
        quote: 'Wisely, and slow. They stumble that run fast.',
        author: 'William Shakespeare'
    },
    {
        quote: 'If you judge people, you have no time to love them.',
        author: 'Mother Teresa'
    },
    {
        quote: 'All that we are is the result of what we have thought.',
        author: 'Buddha' 
    },
    {
        quote: 'The most courageous act is still to think for yourself.',
        author: 'Aloud. Coco Chanel'
    },
    {
        quote: 'The future belongs to those who prepare for it today.',
        author: 'Malcolm X '
    }
]


   

function readQuotes(){
    const quoteSentence = document.querySelector('blockquote p');
    const quoteAuthor = document.querySelector('cite');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomEl = Object.values(randomQuote)
    quoteSentence.textContent = randomEl[0];
    quoteAuthor.textContent = randomEl[1];

    
};

const button = document.querySelector('button')
button.addEventListener('click', readQuotes);

