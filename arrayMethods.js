// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let person = {
//   name: "fareen",
//   age: 24,
//   location: "sonikot",
// };

// let {location} = person
// console.log(location)

// let [first, second, ,  forth] = numbers

// console.log(forth)


// let number = [1, 2, 3, 4, 5];
// let double = number.map(num => num * 2);

// console.log(double)

// const users = ['name1','name2','name3', 'name4','name5'];
// const display = users.map(name => `heloo  ${name}!`)
// console.log(display)

// chaining
// const numbers = [ 1,2,3,4,5]
// const chaining = numbers
// .map(add => add + 5)
// .map(multiply => multiply *2)

// console.log(chaining);

// const names = ['Alice', 'Bob', 'Charlie'];
// names.forEach((name, i) => {
//   console.log(`Index ${i}: ${name}`);
// });



// FOREACH
// let name = ["fareen" , "naveed " , "zain" , "sheryar"]
// name.forEach(function(values , index){
//     console.log(`index ${index} : ${values}`)
// })

// filter

// let values = [1, 2, 3, 4, 5]
// let nameeee= values.filter(value => value >=5);
// console.log(nameeee)


// find

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
  
//   let user = users.find(item => item.id == 1);
  
//   console.log(user.name); 

//   findIndex

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
//     {id: 4, name: "John"}
//   ];
  
  // Find the index of the first John
//  console.log(users.findIndex(user => user.name));

//  console.log(users.findLastIndex(user => user.name))


// Reduce
// let values = [1, 2, 3, 4, 5]
// console.log(values.reduce((sum , current) => sum + current , 0));

// let value = [4,5, 6 , 1]
// console.log(value.reduceRight((sum , current) => sum + current));

// Include

let numbers = [1,2,3,4,5,6];
console.log(numbers.includes(2));
console.log(numbers.includes(9));
console.log(numbers.includes(1, 2));



