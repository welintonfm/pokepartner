import React, { Component } from 'react';
import PokemonCard from './PokemonCard';

function zeroFill(number, width) {
    width -= number.toString().length;
    if(width > 0) {
        return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    }
    return number + "";
}

const PokemonList = (props) => {

    return(
        <ul className="pokemon-list">
            {props.pokemons.map((pokemon, index)=> {
                return <PokemonCard name={pokemon.name} url={pokemon.url} number={`#${zeroFill(index, 3)}`}></PokemonCard>
            })}
        </ul>
    )
}

export default PokemonList