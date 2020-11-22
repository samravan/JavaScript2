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


//Filter MEthod:
const evenDouble = myNumbers.filter(number => {
  if(number % 2 === 0){
    let even = number * 2; //This gives me the answer but when it return the even, answers will got back to normal! Why it's like this?
    return even;
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