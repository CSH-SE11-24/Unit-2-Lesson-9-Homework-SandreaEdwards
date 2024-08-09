// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number

// Prompt the user for another number that is bigger than the first number and cast it to a number
// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number
let input = prompt("enter a number")
parseInt(input)
let input2 = prompt("enter a bigger number")
parseInt(input2)

for(let counter = input;counter <= input2 ; counter++){
console.log(counter)
}

// PART 2: Averaging an array
// Create an array of numbers 
let num = [1, 2, 3, 4]
let sum = 0

// Write a for loop that calculates the sum of the elements 
for(let x = 0; x < num.length; x++){
sum += parseInt(num[x])
}
 console.log(sum)

// Using the sum, calculate the average of all the elements (sum divided by the length of the array
for( let v = 0; v < num.length; v++){
 answer = sum/num.length
}
console.log(sum/num.length)





