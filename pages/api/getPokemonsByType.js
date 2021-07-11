import Axios from "axios"

export default (req, res) => {
  let type_id = req.query.type_id
  Axios.get(`https://pokeapi.co/api/v2/type/${type_id}/`).then((response) => {

    let pokemons = []
    response.data.pokemon.forEach(pokemon => {
        pokemons.push({
            name: pokemon.pokemon.name,
            url: pokemon.pokemon.url
        })
    });

    res.status(200).json({
       pokemons: pokemons,
       damage_relations: response.data.damage_relations
      })
  }).catch(err => {
      console.log(err)
      res.status(err.response.status).json({
        message: err.message
    })
  })
}
  