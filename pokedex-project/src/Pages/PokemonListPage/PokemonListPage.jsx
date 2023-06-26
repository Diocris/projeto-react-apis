import {
  PokemonListWrapper,
  PokedexPageCards,
  CardHolder,
} from "./PokemonListPageStyle.js";

import usePokemonCardContext from "../../Hook/usePokemonCardContext.jsx";

import { handleModal } from "../../script/handleModal.js";

export default function PokemonListPage() {
  const pokemonsCard = usePokemonCardContext(handleModal);

  return (
    <>
      <PokemonListWrapper>
        <CardHolder>
          <PokedexPageCards>{pokemonsCard}</PokedexPageCards>
        </CardHolder>
      </PokemonListWrapper>
    </>
  );
}
