//Creates a random message when program is run
const greetings = ["Hello. ", "Hi. ", "Hey. ", "Greetings. ", "Salutations. "];
const statements = [
  "It's a marvelous day. ",
  "I hope you're doing well. ",
  "I'm so glad you're here. ",
  "Life is good. ",
  "You're smile lightens up the world. ",
];
const fortunes = [
  "You will find success in your endeavors!",
  "A new opportunity is on the horizon!",
  "Expect good news soon!",
  "Your hard work will pay off!",
  "A pleasant surprise awaits you!",
];
// Randomly selects one item from each array and combines them into a message
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
const randomStatement =
  statements[Math.floor(Math.random() * statements.length)];
const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
// Outputs the message to the console
console.log(randomGreeting + randomStatement + randomFortune);
