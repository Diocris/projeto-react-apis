import { useContext } from "react";
import { PokemonContext } from "../Context/PokemonContext";
export default function usePokemonContext() {
  const pokemons = useContext(PokemonContext);
  return pokemons;
}
