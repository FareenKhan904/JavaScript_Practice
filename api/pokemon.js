const button = document.querySelector('button')
button.addEventListener('click', fetchPokemonData) 

const main = document.querySelector('div')

let array = []

async function fetchPokemonData(){
    const response =await  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    array = await  response.json();
console.log(array);

const ul = document.createElement('ul')

for (let index = 0; index < array.stats.length; index++) {
    const element = array.stats[index];

    const li = document.createElement('li')
    li.innerText = element.base_stat;

    const effortLi = document.createElement('li')
    effortLi.innerText = element.effort;

    const statLi = document.createElement('li')
    statLi.innerText = element.stat;

    ul.appendChild(li);
    li.appendChild(effortLi);
    li.appendChild(statLi);
}

main.appendChild(ul);

}