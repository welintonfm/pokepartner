import React, {useState, useEffect} from 'react';

const PokemonDetailHeader = (props) => {

    return(
        <div className="pokemon-detail-header">
            <div className="header">
                <p className="pokemon-number">{props.pokemon.number}</p>
                <img src="logo.png"></img>
            </div>
            <div className="header-info">
                <img className="pokemon-artwork" src={props.pokemon.artwork}></img>
                <div className="pokemon-basic-info">
                    <h1>{props.pokemon.name}</h1>
                    <div>
                        <p>Weight: <span>{(props.pokemon.weight * 0.1).toFixed(2)}kg</span> </p>
                        <p>Height: <span>{(props.pokemon.height * 0.1).toFixed(2)}m</span></p>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default PokemonDetailHeader