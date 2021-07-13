import React, { Component } from 'react';
const PokemonCard = (props) => {

    return(
        <li className="pokemon-card">
            <p className="pokemon-card-number">{props.number}</p>
            <p className="pokemon-card-name">{props.name.replace("-", " ")}</p>
        </li>
    )
}

export default PokemonCard