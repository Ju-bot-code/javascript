let log = console.log;


function checkPlaindrome(text) {
  let data = text.replaceAll(" ", "").toUpperCase();
  let rev = data.split("").reverse().join("");

  return data !== rev ? "Not a palindrome" : "Palindrome !!!!";
}

console.log(checkPlaindrome("hello world"));
console.log(checkPlaindrome("Do geese see God"));
console.log(checkPlaindrome("Borrow or rob"));


