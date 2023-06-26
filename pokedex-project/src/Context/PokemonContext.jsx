import React, { createContext } from "react";

import { usePokemonList } from "../Hook/usePokemonList";

const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const { pokemons, pokeDexList, pokemonList, change, setChange } =
    usePokemonList();

  return (
    <PokemonContext.Provider
      value={{ pokemons, pokeDexList, pokemonList, change, setChange }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export { PokemonContext, PokemonProvider };
