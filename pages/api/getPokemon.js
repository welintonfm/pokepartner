import Axios from "axios"

export default (req, res) => {
  let pokemon_id = req.query.pokemon_id
  Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}/`).then((response) => {
    let pokemon = response.data 
    let types= pokemon.types.map(({ type }) => type.name)
    let abilities= pokemon.abilities.map(({ability}) => ability)
    let stats = new Object;

    pokemon.stats.forEach(type => {
      stats[type.stat.name.replace("-", "_")] = type.base_stat
    });

    res.status(200).json({
       name: pokemon.name,
       artwork: pokemon.sprites.other['official-artwork'].front_default,
       weight: pokemon.weight,
       height: pokemon.height,
       types: types,
       abilities: abilities,
       speed: stats.speed,
       attack: stats.attack,
       sp_attack: stats.special_attack,
       defense: stats.defense,
       sp_defense: stats.special_defense,
       hp: stats.hp
      })
  }).catch(err => {
      console.log(err)
      res.status(err.response.status).json({
        message: err.message
    })
  })
}
  