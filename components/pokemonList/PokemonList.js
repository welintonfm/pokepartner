import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';

function zeroFill(number, width) {
    width -= number.toString().length;
    if(width > 0) {
        return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    }
    return number + "";
}

const PokemonList = (props) => {
    const [chosen_pokemon, setChosenPokemon] = useState("")

    useEffect(() => props.getPokemon(chosen_pokemon));

    return(
        <ul className="pokemon-list">
            {props.pokemons.map((pokemon, index)=> {
                return <PokemonCard getPokemon={chosen_pokemon => setChosenPokemon(chosen_pokemon)} key={index} name={pokemon.name} url={pokemon.url.split("/")[6]} number={`${zeroFill(pokemon.url.split("/")[6], 3)}`}></PokemonCard>
            })}
        </ul>
    )
}

export default PokemonList