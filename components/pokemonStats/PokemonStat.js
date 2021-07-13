import React from 'react';

const PokemonStat = (props) => {
    const points = props.stat.points
    return(
        <li className="pokemon-stat" key={props.stat.title} >
            <p className="stat-title">{props.stat.title}</p>
            <div className="stat-bar" style={{width:points * 1.4}}></div>
            <p className="stat-points"><strong>{points}</strong>/255</p>
        </li>
    )
}

export default PokemonStat