import usePokemonContext from "./usePokemonContext.jsx";
import PokemonCard from "../Components/PokemonCard/PokemonCard.jsx";

export default function PokemonsCard(handleModal) {
  const { pokemonList } = usePokemonContext();

  const list = pokemonList;

  const pokemonsCard = list.map((pokemon) => {
    const pokemonCaught = {
      id: pokemon.id,
      name: pokemon.name,
      type: pokemon.types[0].type.name,
      type2: pokemon.types[1] && pokemon.types[1].type.name,
      image: pokemon.sprites.other["official-artwork"].front_default,
      shinyImage: pokemon.sprites.other["official-artwork"].front_shiny,

      animatedDefault:
        pokemon.sprites.versions["generation-v"]["black-white"].animated
          .front_default,

      animatedShiny:
        pokemon.sprites.versions["generation-v"]["black-white"].animated
          .front_shiny,

      animatedBackDefault:
        pokemon.sprites.versions["generation-v"]["black-white"].animated
          .back_default,

      animatedBackShiny:
        pokemon.sprites.versions["generation-v"]["black-white"].animated
          .back_shiny,
    };
    return (
      <PokemonCard
        key={pokemon.id}
        pokemonCaught={pokemonCaught}
        handleModal={handleModal}
      />
    );
  });

  return pokemonsCard;
}
