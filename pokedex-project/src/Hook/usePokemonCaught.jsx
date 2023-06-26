import PokemonCard from "../Components/PokemonCard/PokemonCard.jsx";

export default function usePokemonCaught(caughtPokemon, shinyCaught) {
  const pokemonsCard = caughtPokemon.map((pokemon) => {
    const isShiny = shinyCaught.some(
      (shinyPokemon) => shinyPokemon.name === pokemon.name
    );

    const pokemonCaught = {
      id: pokemon.id,
      name: pokemon.name,
      type: pokemon.types[0].type.name,
      type2: pokemon.types[1] && pokemon.types[1].type.name,
      image: !isShiny
        ? pokemon.sprites.other["official-artwork"].front_default
        : pokemon.sprites.other["official-artwork"].front_shiny,
      shinyImage: pokemon.sprites.other["official-artwork"].front_shiny,

      animatedDefault: !isShiny
        ? pokemon.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        : pokemon.sprites.versions["generation-v"]["black-white"].animated
            .front_shiny,
      animatedShiny:
        pokemon.sprites.versions["generation-v"]["black-white"].animated
          .front_shiny,
      animatedBackDefault:
        pokemon.sprites.versions["generation-v"]["black-white"].animated
          .back_default,

      animatedBackShiny:
        pokemon.sprites.versions["generation-v"]["black-white"].animated
          .back_shiny,
      shiny: isShiny,
    };

    return (
      <PokemonCard
        isShiny={isShiny}
        key={pokemon.id}
        pokemonCaught={pokemonCaught}
      />
    );
  });

  return pokemonsCard;
}
