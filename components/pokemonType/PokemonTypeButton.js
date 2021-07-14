import React from 'react';

const PokemonTypeButton = (props) => {
    return(
        <button onClick={() => props.getType(props.type)} className={`type-button ${props.type}`}>
            <img src={`/${props.type}.svg`} alt={`${props.type}`}/>
            {props.type}
        </button>
    )
}

export default PokemonTypeButton