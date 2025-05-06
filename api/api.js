// https://rickandmortyapi.com/api/character ------------- link of rick & morty api

let array = []

const button = document.querySelector('button')

button.addEventListener('click' , fetchDataFromServer)

const main = document.querySelector('div')

async function fetchDataFromServer(){
   let response = await fetch('https://rickandmortyapi.com/api/character ') 
   array = await response.json();

   console.log(array)

   const ul = document.createElement('ul')

   for (let index = 0; index < array.results.length; index++) {
    const element = array.results[index];

    const li = document.createElement('li')
    const image = document.createElement('img')
    const statusLi = document.createElement('li')
    const speciesLi = document.createElement('li')


    image.src = element.image;
    li.innerText = element.name;
    statusLi.innerText = element.status;
    speciesLi.innerText = element.species;

    li.appendChild(image);
    ul.appendChild(li)
    li.appendChild(statusLi)
    li.appendChild(speciesLi)
    
   }

main.appendChild(ul);

}