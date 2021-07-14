import React, {useState, useEffect} from 'react';
import PokemonAbilityButton from './PokemonAbilityButton';
import PokemonAbilityTextBox from './PokemonAbilityTextBox';
import Axios from 'axios'

async function getAbility(url, callback){
    await Axios.get(url).then((response) => {
        let ability = response.data.effect_entries.map(entry => {if(entry.language.name == "en") return entry.short_effect})
        ability = ability.filter(function (ability) {
            return ability != null;
          })[0]
        callback(ability)
        return ability
    }).catch(err => {
        console.error(err)
        return
    })
}

const PokemonAbilitiesList = (props) => {
    const [ability, setAbility] = useState()
    const [button, setButton] = useState(0)

    useEffect(() =>{setButton(0)}, [props.pokemon])

    return(
        <div className="abilities-list">
            <h2>Abilities</h2>
            <div>
            <ul>
                {props.pokemon.abilities.map((_ability, index)=> {
                        if(index === 0) getAbility(_ability.url, setAbility)
                        return <PokemonAbilityButton actived={button} setActiveButton={button => setButton(button)} componentKey={index} getAbility={setAbility} key={index} ability={_ability.name} url={_ability.url}/>
                        }
                    )}
                </ul>
            <PokemonAbilityTextBox ability={ ability } />
            </div>
        </div>
    )
}

export default PokemonAbilitiesList