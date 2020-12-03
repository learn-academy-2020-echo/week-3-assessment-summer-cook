// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//fibonacci sequence - each subsequent number is the sum of the previous two
// F(n) = F(n-1) + F(n-2)
//

// num1 = 1
// num2 = 1
// num3 = 2
// num4 = 5

//write a function that returns the number to 10 numbers in the array
//the 10 numbers would go to index 9
//the first number of fibonacci's sequence is actually 0 so need to start at index 1

//first i wrote the logic for what is happening to the numbers in the fibonacci sequence, with regards to their index
const fibonacci = (n) => {
  if(n < 2){
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

//i was able to print the correct output for each index in the sequence, but I was stuck when it came to writing all of this in a single function
console.log(fibonacci(2))
console.log(fibonacci(6))
console.log(fibonacci(0))

//I thought it would make sense to wrap a for loop in a function, and then call the function that produces the fibonacci numbers
i = 10
const fibonacciArray = (i) => {
  let newArray = []
  for (let i=1; i<11; i++){
    newArray.push(fibonacci(i))
  }
  return newArray
}

//this does print the array with the fibonacci sequence correctly, but I figured out the argument & variable i is pointless because you can set it to anything and it still returns indices 1-11 in accordance with the expected output.
//you have to modify i within the for loop to return other parts of the fibonacci sequence if you want them
//I feel like theres a better way to do this that combines it all into one function but I kept getting undefined
console.log(fibonacciArray(i))






// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//write a function that takes in an array
const sortNumbers = (array) => {
  //filters through the values in the array
  return array.filter(value =>
    //to return only off numbers
    value % 2 !== 0 &&
    //that also have a data type of number, then sort them least to greatest.
    typeof value === "number").sort(function(a, b){return a-b})
}

//log the output of the function.
console.log(sortNumbers(fullArr1))
console.log(sortNumbers(fullArr2))




// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”
var middleLetters3 = "rhino"

// const returnMiddleLetters = (singleWordString) => {
//   if(singleWordString.length/2 % 2 !== 0)
//   let medianIndex = singleWordString.length/2
//   return singleWordString[medianIndex]
// }

const returnMiddleLetters = (singleWordString) => {
  //if the string has an even number of letters, return the two middle characters
  if(singleWordString.length % 2 == 0){
    //define a variable for the first middle index of an even string
    let medianIndex1 = singleWordString.length/2 - 1
    //define a variable for the second middle index of an even string
    let medianIndex2 = singleWordString.length/2
    //return the character at each median index of the strings
    return `${singleWordString.charAt(medianIndex1)} ${singleWordString.charAt(medianIndex2)}`
  } else {
    //define a variable for the middle index of the odd numbers
    let medianIndexForOdds = singleWordString.length/2 -.5
    //return the character at the middle index
    return singleWordString.charAt(medianIndexForOdds)
  }
}

console.log(returnMiddleLetters(middleLetters1))
console.log(returnMiddleLetters(middleLetters2))
console.log(returnMiddleLetters(middleLetters3))




// --------------------4) READ CAREFULLY: Create a CLASS to get the area of a sphere. Create THREE spheres with different radi as test cases. Area of a sphere =  4πr^2 (four * pi * radi squared)

class Sphere {
  constructor(r){
    this.r = r
}
    area(){
      return 4 * Math.PI * Math.pow(this.r, 2)
  }
}

//sphere with area of 3
var sphere1 = new Sphere(3)
console.log("area 1=", sphere1.area())

//sphere with area of 4
var sphere1 = new Sphere(4)
console.log("area 2=", sphere1.area())

//sphere with area of 5
var sphere1 = new Sphere(5)
console.log("area 3=", sphere1.area())




// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

//create a function that takes in an array and adds all the previous numbers to each following numbers
const addNumbersArray = (array) => {
  // map over the array & return a new array including the mapped values
return array.map((value, index) => {
  // if the value is AT index of 0
  //I tried so many ways to write this but kept getting NaN as answers.... I want it to check if the value is at the 0 index in the array, and if it is, I want the returned value to remain the same
    if(index === 0){
      //for the value at index 0, return the original value
    return value
    }else{
  //for all values at later positions in the array, return the original value + the value at the previous index.
  return value + value[index - 1]
    }
  })
}
console.log(addNumbersArray(numbersToAdd1))
