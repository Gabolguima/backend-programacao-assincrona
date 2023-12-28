const { listaPokemons, detalharPokemon, listarPokemons } = require("utils-playground");

const pokemons = async (req, res) => {
  const { pagina } = req.query;

  const listaPokemons = await listarPokemons(pagina ?? 1);

  return res.json(listaPokemons);
};

const pokemon = async (req, res) => {
  const { idOuNome } = req.params;

  const pokemonDetalhado = await detalharPokemon(idOuNome);

  const {
    id,
    name,
    height,
    weight,
    base_experience,
    forms,
    abilities,
    species
  } = pokemonDetalhado;

  return res.json({
    id,
    name,
    height,
    weight,
    base_experience,
    forms,
    abilities,
    species
  });
};

module.exports = {
  pokemon,
  pokemons
}