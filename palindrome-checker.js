function palindrome(str) {

  return str.replace(/\W|_/g, "").split("").reverse().join("").toLowerCase() === str.replace(/\W|_/g, "").toLowerCase();
}



palindrome("0_0 (: /-\ :) 0-0");