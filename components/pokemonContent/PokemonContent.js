import React, {useEffect, useState} from 'react';
import PokemonDetailHeader from '../pokemonDetailHeader/PokemonDetailHeader'
import PokemonDetailFooter from '../pokemonDetailFooter/PokemonDetailFooter'
import PokemonTypeButton from '../pokemonType/PokemonTypeButton'


async function changeType(type, callback){
    await callback(type)
    return
}

const PokemonContent = (props) => {
    const [type, setType] = useState()
    useEffect(() => {
        changeType(type, props.getType)
    }, [type])

    return(
        <>
            <PokemonDetailHeader pokemon={props.pokemon} />
            <div className="types">
                {props.pokemon.types.map((type, index)=> {
                    return <PokemonTypeButton getType={type => setType(type)} type={type} key={index}/>
                })}
            </div>
            <PokemonDetailFooter pokemon={props.pokemon} />
        </>
    )
}

export default PokemonContent