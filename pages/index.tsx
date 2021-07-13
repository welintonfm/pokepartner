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
import {Router, useRouter} from 'next/router'

async function getInitialPokemon(){
  var pokemons;
  
  await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=898`).then((response) => {
    pokemons = response.data.results
  })

  return pokemons;
}

async function getBulbassaur(){
  await Axios.get(`/api/getPokemon?pokemon_id=1`).then((response) => {
      let pokemon = response.data 
      return pokemon
  }).catch(err => {
    console.error(err)
    return
  })
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
  useEffect(() =>{
  })

  return (
   <div className="container">
     <div className="sidebar">
       <PokemonFilteredList pokemons={props.initial_pokemons} getPokemon={pokemon => setPokemon(pokemon)}/>
     </div>
     <div className="content-box">
      <div className="content">
        {pokemon && <PokemonDetailHeader pokemon={pokemon} />}
        {pokemon && <PokemonStatList pokemon={pokemon} />}
        <div className="metal-border"></div>
      </div>
     </div>
   </div>
  )
}

export default Home
