// 

let obj = {
    name: "fareen",
    year : 2025,
    month : "april",
    date : "21-04-2024"
}

// values
console.log(Object.values(obj));

// entries
console.log(Object.entries(obj))

// keys
console.log(Object.keys(obj))
console.log(Object.keys(obj).length)


// fromentries
let arr =[
    ["name " , "fareen"],
    ["year" , 2025],
    ["month" , "april"],
    ["date" , 21]
]
console.log(Object.fromEntries(arr));


// hasOwnProperty
console.log(Object.hasOwnProperty("age"))

// assign
let user = { name: "Alice" };
let info = { age: 25 };
let job = { role: "Engineer" };

console.log(Object.assign(user , info , job));