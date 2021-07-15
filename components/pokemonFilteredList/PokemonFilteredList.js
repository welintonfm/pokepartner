import React, {useState, useEffect} from 'react';
import PokemonList from '../pokemonList/PokemonList';
import {BiSearch} from 'react-icons/bi'
import Axios from 'axios'


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

async function getPokemonsByType(type, callback){
    await Axios.get(`/api/getPokemonsByType?type_id=${type}`).then((response) => {
        let pokemons = response.data.pokemons
        callback([...pokemons])
        return pokemons
    }).catch(err => {
      console.error(err)
      return
    })
}

function closeTypeFilter(pokemons, resetType, setFilteredPokemons){
    resetType(null);
    setFilteredPokemons(pokemons)
    return
}

const PokemonFilteredList = (props) => {
    let [filtered_pokemons, setFilteredPokemons] = useState(props.pokemons)  
    const [pokemon, setPokemon] = useState('')
    useEffect(() => props.getPokemon(pokemon), [pokemon]);
    useEffect(() => {
        if(props.type){
            getPokemonsByType(props.type, setFilteredPokemons)
        }
    },[props.type]);
    return(
        <div className="pokemon-filtered-list">
            <div className="filter-container">
                {!props.type ? <div className="filter-by-name">
                    <input type="text" onChange={event => {
                        let new_pokemon_list = []
                        new_pokemon_list = filterPokemons(props.pokemons, event.target.value)
                        setFilteredPokemons([...new_pokemon_list])
                    }} placeholder="name or number..."/><BiSearch /> </div> :
                    <>
                        <div className="type-filter-container">
                            <p>Filtering by type:</p>
                            <button onClick={() => {closeTypeFilter(props.pokemons, props.resetType, setFilteredPokemons)}} className="close-type-filter">X</button>   
                            <div className={`type-filter-type ${props.type}`}><img src={`${props.type}.svg`}/>{props.type}</div>
                        </div>
                    </>
                }
            </div>
            <PokemonList pokemons={filtered_pokemons} getPokemon={pokemon => setPokemon(pokemon)} />
        </div>
    )
}

export default PokemonFilteredList