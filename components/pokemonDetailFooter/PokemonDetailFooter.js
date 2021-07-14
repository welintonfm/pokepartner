import React from 'react';
import PokemonStatList from '../pokemonStats/PokemonStatList'
import PokemonAbilitiesList from '../pokemonAbilities/PokemonAbilitiesList'

const PokemonDetailFooter = (props) => {
    return(
        <div className="pokemon-detail-footer">
            <PokemonStatList pokemon={props.pokemon} />
            <PokemonAbilitiesList pokemon={props.pokemon}/>
        </div>
    )
}

export default PokemonDetailFooter