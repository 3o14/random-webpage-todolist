const quotes = [
    {
        quote: "Well done is better than well said.",
        author: "Benjamin Franklin",
    },
    {
        quote: "If you would thoroughly know anything, teach it to others.",
        author: "Tryon Edwards",
    },
    {
        quote: "My personal hobbies are reading, listening to music, and silence.",
        author: "Edith Sitwell",
    },
    {
        quote: "Reading is sometimes an ingenious device for avoiding thought.",
        author: "Sir Arthur Helps",
    },
    {
        quote: "Nothing makes the earth seem so spacious as to have friends at a distance; they make the latitudes and longitudes.",
        author: "Henry David Thoreau",
    },
    {
        quote: "Perpetual optimism is a force multiplier.",
        author: "Colin Powell",
    },
    {
        quote: "Love is the delightful interval between meeting a beautiful girl and discovering that she looks like a haddock.",
        author: "John Barrymore",
    },
    {
        quote: "When one door of happiness closes, another one opens; but often we look so long at the closed door that we do not see the one which has opened for us.",
        author: "Helen Keller",
    },
    {
        quote: "If it is always sunny, it will become a desert. It has to rain and be windy for it to become fertile land. ",
        author: "Spanish Idioms.",
    },
    {
        quote: "Laugh at yourself first,. before anyone else can.",
        author: "Elsa Maxwell"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
