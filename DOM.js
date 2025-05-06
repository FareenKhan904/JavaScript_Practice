//? getting elements with dom
// const buttonbyId = document.getElementById('btn-1')
// console.log(buttonbyId)
// const button = document.querySelector('button')
// console.log('button');

const button =document.getElementByClassName('btn')
console.log('button')



// const buttonbyClassName = document.getElementsByClassName('btn-1')
// console.log(buttonbyClassName[0])

//? removing elements with dom
// const div = document.querySelector('div')
// const button = document.querySelector('button')
// div.removeChild(button)

//? creating elements, adding text and appending to html
// const p = document.createElement('h1')
// p.innerText = 'lorem ipsum'
// p.innerHTML = 'lorem ipsum'
// const div = document.querySelector('div')
// div.appendChild(p)


//? working with attributes
// const p = document.querySelector('p');
// console.log(p.getAttribute('class'))
// p.setAttribute('class',"karim")
// console.log(p.getAttribute("class"))


//? working with classes
// const p = document.querySelector('p');
// console.log(p.classList.add('fareen'))
// console.log(p.classList.remove('example-class'))
// console.log(p.classList.toggle('example-class'))
// console.log(p.getAttribute('class'))

// const btn = document.querySelector('button');

// btn.onclick = ()=>{
//     alert('Fareen')
// }

// btn.addEventListener("mouseup",()=>{
//     alert("naveed")
// })

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'f') {
//         alert('The "f" key was pressed!');
//     }
// });

// const btn = document.querySelector('button')
// const p = document.querySelector('p');

// btn.addEventListener('click', () => {
//     p.classList.toggle('test')
// });