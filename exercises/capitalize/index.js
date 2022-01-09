// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let copied = str.split("");
  for (let i in copied) {
    if (i === "0") {
      copied[i] = copied[i].toUpperCase();
      continue;
    }
    if (copied[i - 1] === " ") copied[i] = copied[i].toUpperCase();
  }
  return copied.join("");
}

module.exports = capitalize;
