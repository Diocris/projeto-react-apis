import {
  PokeAnim,
  WarningModal,
  CaughtTextStyle,
  ModalHolder,
} from "./WarningStyle";
import PokeballSprite from "../PokeballSprite/PokeballSprite";
import { caughtPokemon } from "../../../script/handleModal";
import { caughtPokemons } from "../../../script/caughtPokemons";
import usePokemonContext from "../../../Hook/usePokemonContext";
import { useEffect } from "react";

export default function Warning({ pokemon, setCaughtPokemon, goToDex }) {
  const { change, setChange } = usePokemonContext();

  const shinyProb = Math.floor(Math.random() * 100 + 1);
  const shiny = shinyProb > 50 ? true : false;
  const catchProb = Math.floor(Math.random() * 100 + 1);
  const caught = catchProb > 30 ? true : false;

  const pokemonToAdd = {
    name: pokemon.name,
    shiny: shiny,
  };

  useEffect(() => {
    if (caught) {
      caughtPokemon(setCaughtPokemon);
      caughtPokemons.push(pokemonToAdd);
      setTimeout(() => {
        setChange(change + 1);
      }, 5000);
      if (goToDex) {
        goToDex(5000);
      }
    }
  }, [caught]);

  return caught ? (
    <ModalHolder>
      <WarningModal>
        {shiny ? (
          <CaughtTextStyle>
            <p>You caught a shiny</p>
            <h4>{pokemon.name}!</h4>
          </CaughtTextStyle>
        ) : (
          <CaughtTextStyle>
            <p>You caught a </p>
            <h4>{pokemon.name}!</h4>
          </CaughtTextStyle>
        )}

        {shiny ? (
          <PokeAnim src={pokemon.animatedShiny} />
        ) : (
          <PokeAnim src={pokemon.animatedDefault} />
        )}

        <PokeballSprite caught={caught} />
      </WarningModal>
    </ModalHolder>
  ) : (
    <ModalHolder>
      <WarningModal>
        <CaughtTextStyle>
          <p>Your pokeball broke! </p>
        </CaughtTextStyle>

        {shiny ? (
          <PokeAnim src={pokemon.animatedShiny} />
        ) : (
          <PokeAnim src={pokemon.animated} />
        )}

        <PokeballSprite />
      </WarningModal>
    </ModalHolder>
  );
}
