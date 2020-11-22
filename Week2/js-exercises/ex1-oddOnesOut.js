/**

 ** Exercise 1: The odd ones out **

 Rewrite the following function using map and filter. 
 Avoid using for loop or forEach.
 The function should still behave the same.

 */
function doubleEvenNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
// console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console

//Filter Method:
const evenDouble = myNumbers.filter(number => {
  if(number % 2 === 0){
    return number * 2;
  }
});
console.log(evenDouble);

//Map Method: 
const evenNum = myNumbers.map(number => {
  if(number % 2 === 0) {
    return number *2;
  };
});
console.log(evenNum);