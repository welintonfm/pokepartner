import React, {useState, useEffect} from 'react';
import Axios from 'axios'

async function getAbility(url, callback){
    await Axios.get(url).then((response) => {
        let ability = response.data.effect_entries.map(entry => {if(entry.language.name == "en") return entry.short_effect})
        ability = ability.filter(function (ability) {
            return ability != null;
          })[0]
        callback(ability)
        console.log(ability)
        return ability
    }).catch(err => {
        console.error(err)
        return
    })
}

const PokemonAbilityButton = (props) => {

    return(
        <li>
            <button className="ability-button" onClick={async () => getAbility(props.url, props.getAbility)}>{props.ability}</button>
        </li>
    )
}

export default PokemonAbilityButton