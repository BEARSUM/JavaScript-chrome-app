const quotes = [
  {
    quote:
      "Dreams come true. Without that possibility, nature would not incite us to have them.",
    author: "John Updike",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "Every day, every minute, every second, you have a chance to change your life.",
    author: "Disney Dumbo",
  },
  {
    quote: "To love someone, you have to love yourself first.",
    author: "Beauty And The Beast",
  },
  {
    quote: "Remember you're the one who can fill the world with sunshine.",
    author: "Snow White",
  },
  {
    quote:
      "Love is a beautiful phenomenon in which the happiness of others determines your happiness.",
    author: "Pinocchio",
  },
  {
    quote:
      "They say that the best blaze bruns brightest when circumstances are at their worst.",
    author: "Howl's Moving Castle",
  },
  {
    quote:
      "When you find person that accepts you the way you are, that's home.",
    author: "Ocean Waves",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
