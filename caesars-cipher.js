// function rot13(str) {

//     return str.split("").map(x =>{
//       return /[A-M]/.test(x) ? String.fromCharCode(x.charCodeAt(0) + 13) : /[N-Z]/.test(x) ? String.fromCharCode(x.charCodeAt(0) - 13) : x;
//   }).join("");
// }

function rot13(str) {
  return str.replace(/\w/g, x => {
  return String.fromCharCode(x.charCodeAt() % 26 + 65)});

}
rot13("SERR PBQR PNZC");