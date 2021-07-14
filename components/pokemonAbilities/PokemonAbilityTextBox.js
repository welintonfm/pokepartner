import React, {useState, useEffect} from 'react';

const PokemonAbilityTextBox = (props) => {

    return(
        <div className="ability-text-box">{props.ability}</div>
    )
}

export default PokemonAbilityTextBox