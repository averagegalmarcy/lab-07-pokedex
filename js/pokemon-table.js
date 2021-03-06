import html from './html.js'; 
const tableBody = document.getElementById('pokemon-body'); 

function makeRow(pokemon) {
    return html`<tr> 
        <td>${pokemon.pokebase}</td> 
        <td>${pokemon.species_id}</td>
        <td>${pokemon.type_1}</td>
        <td>${pokemon.ability_1}</td>
        <td>${pokemon.defense}</td>
        <td>${pokemon.attack}</td>
    </tr>`;
}

const pokemonTable = {
    init(pokemons) {
        pokemons.forEach(function(pokemon) {
            const tr = makeRow(pokemon); 
            tableBody.appendChild(tr); 
        });
        
    }, 

    update(pokemons) {
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove(); 
        }

        pokemonTable.init(pokemons);
    }
}; 


export default pokemonTable; 
