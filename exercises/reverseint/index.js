// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   const arrInt = n.toString().split("");
//   if (arrInt.includes("-")) {
//     const newArr = arrInt.splice(1, arrInt.length - 1);
//     return parseInt(
//       "-" +
//         newArr.reduce((rev, char) => {
//           return char + rev;
//         }, "")
//     );
//   }
//   return parseInt(
//     arrInt.reduce((rev, char) => {
//       return char + rev;
//     }, "")
//   );
// }

function reverseInt(n) {
  const a = parseInt(n.toString().split("").reverse().join(""));
  if (n < 0) return a * -1;
  return a;
}

module.exports = reverseInt;
