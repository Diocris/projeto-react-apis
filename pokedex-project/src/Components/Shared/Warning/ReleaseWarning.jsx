import { useEffect } from "react";
import {
  WarningModal,
  CaughtTextStyle,
  ModalHolder,
  PokeAnim,
} from "./ReleaseWarningStyled";
import usePokemonContext from "../../../Hook/usePokemonContext";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../../Routes/coordinator";

export default function ReleaseWarning({ pokemon, goToDex }) {
  const { change, setChange } = usePokemonContext();

  useEffect(() => {
    setTimeout(() => {
      setChange(change + 1);
    }, 2000);
    if (goToDex) {
      goToDex(2000);
    }
  }, [pokemon]);

  return (
    <ModalHolder>
      <WarningModal>
        <CaughtTextStyle>
          <p>You released your</p>
          <h4>{pokemon.name}!</h4>
        </CaughtTextStyle>
        {pokemon.shiny ? (
          <PokeAnim src={pokemon.animatedBackShiny} />
        ) : (
          <PokeAnim src={pokemon.animatedBackDefault} />
        )}
      </WarningModal>
    </ModalHolder>
  );
}
