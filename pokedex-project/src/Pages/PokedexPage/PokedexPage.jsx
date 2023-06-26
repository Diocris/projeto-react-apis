import { caughtPokemons } from "../../script/caughtPokemons";
import {
  PokedexPageCards,
  PokemonListWrapper,
} from "../PokemonListPage/PokemonListPageStyle.js";

import { PokemonContext } from "../../Context/PokemonContext.jsx";
import { useState, useEffect, useContext } from "react";

import usePokemonCaught from "../../Hook/usePokemonCaught.jsx";

export default function PokedexPage() {
  const { pokeDexList, change } = useContext(PokemonContext);
  const caughtPokemon = pokeDexList;

  const [isCaught, setIsCaught] = useState([]);
  const [shinyCaught, setShinyCaught] = useState([]);

  useEffect(() => {
    const caughtNames = caughtPokemon.map((pokemon) => {
      return pokemon.name;
    });
    setIsCaught(caughtNames);

    const caughtShinies = caughtPokemon.filter((pokemon) => {
      return pokemon.shiny === true;
    });
    setShinyCaught(caughtShinies);
  }, [caughtPokemons]);

  const [pokemonsCard, setPokemonsCard] = useState();

  useEffect(() => {
    const pokemonCaught = usePokemonCaught(caughtPokemon, shinyCaught);
    setPokemonsCard(pokemonCaught);
  }, [caughtPokemons, isCaught, change]);

  return (
    <>
      <h1 style={{ color: "white", margin: "2rem 0rem 1rem 4rem" }}>
        Pokedex Page
      </h1>

      <PokemonListWrapper>
        <PokedexPageCards>
          {caughtPokemons.length > 0 ? (
            pokemonsCard
          ) : (
            <p className="empty-list-text">
              There is no Pokemon caught to be displayed yet! <br />
              <br />
              Go back and gotta catch'em all!
            </p>
          )}
        </PokedexPageCards>
      </PokemonListWrapper>
    </>
  );
}
