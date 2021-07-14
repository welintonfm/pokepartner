import React, {useState, useEffect} from 'react';
import PokemonAbilityButton from './PokemonAbilityButton';
import PokemonAbilityTextBox from './PokemonAbilityTextBox';

const PokemonAbilitiesList = (props) => {
    const [ability, setAbility] = useState()

    useEffect(() => console.log(ability));

    return(
        <div className="abilities-list">
            <h2>Abilities</h2>
            <div>
            <ul>
                {props.pokemon.abilities.map((ability, index)=> {
                        return <PokemonAbilityButton getAbility={setAbility} key={index} ability={ability.name} url={ability.url}/>
                        }
                    )}
                </ul>
            <PokemonAbilityTextBox ability={ ability } />
            </div>
        </div>
    )
}

export default PokemonAbilitiesList