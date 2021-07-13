import React, {useState} from 'react';
import PokemonList from '../pokemonList/PokemonList';
import {BiSearch} from 'react-icons/bi'


function filterPokemonsByName(initial_pokemons, search){
    const filtered_pokemons = initial_pokemons.filter(pokemon => pokemon.name.startsWith(search))
    return filtered_pokemons
}

function filterPokemonsByNumber(initial_pokemons, search){
    const filtered_pokemons = initial_pokemons.filter(pokemon => pokemon.url.split("/")[6].startsWith(search))
    return filtered_pokemons
}

function filterPokemons(initial_pokemons,value){
    let filtered_pokemons = [];
    if(!isNaN(value)){
       filtered_pokemons = filterPokemonsByNumber(initial_pokemons, value)
       return filtered_pokemons
    }
    filtered_pokemons = filterPokemonsByName(initial_pokemons, value)
    return filtered_pokemons
}


const PokemonFilteredList = (props) => {
    let [filtered_pokemons, setFilteredPokemons] = useState(props.pokemons)  
    return(
        <div className="pokemon-filtered-list">
            <div><input type="text" onChange={event => {
                    let new_pokemon_list = []
                    new_pokemon_list = filterPokemons(props.pokemons, event.target.value)
                    setFilteredPokemons([...new_pokemon_list])
                    console.log(filtered_pokemons)
                }} placeholder="name or number..."/><BiSearch /></div>
            
            <PokemonList pokemons={filtered_pokemons}></PokemonList>
        </div>
    )
}

export default PokemonFilteredList