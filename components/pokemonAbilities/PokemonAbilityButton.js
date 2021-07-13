import React, {useState, useEffect} from 'react';

const PokemonAbilityButton = (props) => {

    return(
        <li>
            <button className="ability-button">{props.ability}</button>
        </li>
    )
}

export default PokemonAbilityButton