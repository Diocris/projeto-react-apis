import { useEffect, useState } from "react";
import { BASE_URL } from "../Constants/baseUrl";
import axios from "axios";
export default function usePokemonData() {
  const locate = useLocation();
  const isShiny = locate.pathname.includes("shiny");
  const [pokemon, setPokemon] = useState({});

  const getPokemonData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${"bulbasaur"}`);

      setPokemon({
        ...pokemon,
        name: response.data.name,
        id: response.data.id,
        types: response.data.types,
        mainSprite: !isShiny
          ? response.data.sprites.other["official-artwork"].front_default
          : response.data.sprites.other["official-artwork"].front_shiny,
        backSprite: !isShiny
          ? response.data.sprites.back_default
          : response.data.sprites.back_shiny,
        frontSprite: !isShiny
          ? response.data.sprites.front_default
          : response.data.sprites.back_shiny,
        stats: response.data.stats,
        moves: response.data.moves,
        animatedSprite:
          response.data.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getPokemonData();

  return pokemon;
}
