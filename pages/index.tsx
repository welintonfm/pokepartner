import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PokemonList from '../components/pokemonList/PokemonList'
import Axios from "axios"
import PokemonCard from '../components/pokemonList/PokemonCard'
import PokemonFilteredList from '../components/pokemonFilteredList/PokemonFilteredList'
import React, {useState, useEffect} from 'react'
import PokemonDetailHeader from '../components/pokemonDetailHeader/PokemonDetailHeader'

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
  const [pokemon, setPokemon] = useState('')

  useEffect(() => {
    console.log(pokemon)
  });

  return (
   <div className="container">
     <div className="sidebar">
       <PokemonFilteredList pokemons={props.initial_pokemons} getPokemon={pokemon => setPokemon(pokemon)}/>
     </div>
     <div className="content-box">
      <div className="content">
        <PokemonDetailHeader pokemon={pokemon} />
        <div className="metal-border"></div>
      </div>
     </div>
   </div>
  )
}

export default Home
