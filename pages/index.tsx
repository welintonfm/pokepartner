import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PokemonList from '../components/pokemonList/PokemonList'
import Axios from "axios"
import PokemonCard from '../components/pokemonList/PokemonCard'
import PokemonFilteredList from '../components/pokemonFilteredList/PokemonFilteredList'
import React, {useState, useEffect} from 'react'
import PokemonDetailHeader from '../components/pokemonDetailHeader/PokemonDetailHeader'
import PokemonStatList from '../components/pokemonStats/PokemonStatList'
import PokemonAbilitiesList from '../components/pokemonAbilities/PokemonAbilitiesList'
import PokemonDetailFooter from '../components/pokemonDetailFooter/PokemonDetailFooter'
import PokemonContent from '../components/pokemonContent/PokemonContent'
import PokemonTypeButton from '../components/pokemonType/PokemonTypeButton'

async function getInitialPokemon(){
  var pokemons;
  
  await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=898`).then((response) => {
    pokemons = response.data.results
  })

  return pokemons;
}

export const getStaticProps = async ({ params }) =>{
  const initial_pokemons = await getInitialPokemon()
  return {
    props: { initial_pokemons },
    revalidate: 10
  }
}
const Home: React.FC<{initial_pokemons}> = (props) =>  {
  const [pokemon, setPokemon] = useState()
  const [type, setType] = useState()
  const [pokemonList, setPokemonList] = useState(props.initial_pokemons)

  return (
  <>
    <Head>
      <title>PokePartner</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Pokedex desenvolvida em React e NextJs"></meta>
    </Head>
   <div className="container">
      <div className="sidebar">
        <PokemonFilteredList type={type} resetType={type => setType(type)} pokemon={pokemon} pokemons={pokemonList} getPokemon={pokemon => setPokemon(pokemon)}/>
      </div>
      <div className="content-box">
      {!pokemon ?
          <div className="home">
            <img src="logo.png" alt="PokePartner" />
            <p>Escolha o Pokémon que deseja ver as informações.</p>
          </div> :
        <div className="content">
          {pokemon && <PokemonContent getType={type => setType(type)} pokemon={pokemon} />}
          <div className="metal-border"></div>
        </div>}
      </div>
   </div>
   </>
  )
}

export default Home
