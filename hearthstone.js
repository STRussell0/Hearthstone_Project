const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec11812c00msh44388419564507ep1d8d86jsn486fe9cf4f87',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};
const base_url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/";
const nameInput = document.getElementById('nameInput');
const button = document.getElementById("button");
let cardName = "";

button.addEventListener('click', function () {
    console.log(nameInput.value);
    cardName = nameInput.value;
    console.log(cardName);
    getCard();
})

function getCard () {
    fetch(base_url + cardName, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}


// Pokemon Stuff


// const offsetInput = document.querySelectorAll('input')[0];
// const listLengthInput = document.querySelectorAll('input')[1];
// const button = document.querySelector('button');
// const listElement = document.querySelector('.list');
// const pokemonElement = document.querySelector('.pokemon');
// let offset = 0;
// let listLength = 10;

// button.addEventListener('click', () => {
//     offset = offsetInput.value;
//     listLength = listLengthInput.value;
//     getPokemonList();
// })

// function getPokemonByName(name){
//     const base_url = 'https://pokeapi.co/api/v2/pokemon/';

//     fetch(base_url + name)
//     .then( res => {
//         return res.json();
// }).then( facts => {
//     pokemonElement.innerHTML = '';
//     console.log(facts);
//     const h1 = document.createElement('h1');
//     h1.innerText = facts.name;
//     pokemonElement.appendChild(h1);

//     const img = document.createElement('img');
//     pokemonElement.appendChild(img);
//     img.src = facts.sprites.front_default;
//     img.width = '200';
// });
// }

// getPokemonByName('charizard');

// function getPokemonList() {
//     const base_url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${listLength}`;
    
//     fetch(base_url) // fetch the api
//     .then(res => res.json()) //change the response to a json
//     .then(res => console.log(res))
//     .then(data => { //then do something with the data

//         listElement.innerHTML = '';
//         data.results.forEach( pokemon => { //do something with each pokemon
//             const li = document.createElement('li'); //make a list item
//             li.innerText = pokemon.name; //make the list item display the pokemon name
//             listElement.appendChild(li); // attach the list item to the html
//             li.addEventListener('click', () => { //add a click function
//                 getPokemonByName(pokemon.name); // display the previous function that shows the image and pokemon name
//             })

//         });
//     });
// }

// getPokemonList();