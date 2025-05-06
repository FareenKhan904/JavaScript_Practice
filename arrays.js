// What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;

console.log(fruits)
shoppingCart.push("Banana");


// what's in fruits?
console.log( fruits.length ); 
console.log(shoppingCart)

/* Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array. */

let styles = ['Jazz' , 'Blues']
console.log(styles)

styles.push('Rock-n-Roll');
console.log(styles)

styles[1] = 'Classics';
console.log(styles)

styles.shift();
console.log(styles)

styles.unshift('Rap' , 'Reggae');
console.log(styles)


// What is the result? Why?
let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2]();


/* Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero. */

let value = prompt('please enter a number' ,0)

