import React from 'react';
import PokemonStat from './PokemonStat';

const PokemonStatList = (props) => {
    const stats = props.pokemon.stats
    return(
        <div className="pokemon-stat-list">
            <h2>Stats</h2>
            <ul>
                <PokemonStat stat={{title: 'hp', points: stats.hp, }} key="hp"/>
                <PokemonStat stat={{title: 'atk', points: stats.atk, }} key="atk"/>
                <PokemonStat stat={{title: 'def', points: stats.def, }} key="def"/>
                <PokemonStat stat={{title: 'sp. atk', points: stats.sp_atk, }} key="spatk"/>
                <PokemonStat stat={{title: 'sp. def', points: stats.sp_def, }} key="spdef"/>
                <PokemonStat stat={{title: 'spd', points: stats.spd, }} key="spd"/>
            </ul>
        </div> 
    )
}

export default PokemonStatList