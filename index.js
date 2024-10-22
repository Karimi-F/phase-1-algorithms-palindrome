function isPalindrome(str) {
  // Write your algorithm here
  const newString = str.toLowerCase();

  const reversedString = newString.split('').reverse().join('');

  return newString === reversedString;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("abba"));
  console.log("=>", isPalindrome("a"));
  console.log("=>", isPalindrome("deed"));
  console.log("=>", isPalindrome("rotator"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("ab"));
  console.log("=>", isPalindrome("peephole"));
  console.log("=>", isPalindrome("test"));
}

module.exports = isPalindrome;
