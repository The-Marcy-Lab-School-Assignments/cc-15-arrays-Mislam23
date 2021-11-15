//write your code here

// my Algorithm:
// -declare a function named findLongestWord with one parameter named array
// -create an empty string variable called longestWord using let decleration
// -create a for loop that iterates from the beginning to the end of the array input
// -create an if statement that checks if the first word has more characters than the next
// -if so assign that word to the longestWord variable
// -return longestWord

let wordsArray = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

function findLongestWord(array) {
    debugger
    let longestWord = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i];
         }
    }
    return longestWord;
}

console.log(findLongestWord(wordsArray))