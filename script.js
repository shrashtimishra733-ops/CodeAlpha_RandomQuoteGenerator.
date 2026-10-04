const quotes = [
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vincent Peale"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },
    {
        text: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        text: "Your limitation—it’s only your imagination.",
        author: "Unknown"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("newQuoteBtn");

let lastQuoteIndex = -1;

function generateQuote() {

    let randomIndex;

    // Same quote immediately repeat na ho
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);

    lastQuoteIndex = randomIndex;

    const randomQuote = quotes[randomIndex];

    quoteElement.textContent = `"${randomQuote.text}"`;
    authorElement.textContent = `— ${randomQuote.author}`;
}

newQuoteButton.addEventListener("click", generateQuote);

generateQuote();
const copyButton = document.getElementById("copyBtn");

copyButton.addEventListener("click", function () {

    const quoteText = quoteElement.textContent;
    const authorText = authorElement.textContent;

    const completeQuote = `${quoteText} ${authorText}`;

    navigator.clipboard.writeText(completeQuote);

    copyButton.textContent = "✅ Copied!";

    setTimeout(() => {
        copyButton.textContent = "📋 Copy Quote";
    }, 1500);
});
