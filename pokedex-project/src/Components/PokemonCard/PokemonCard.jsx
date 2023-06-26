import {
  ButtonWrapper,
  ContentHolder,
  DetailsAnchor,
  IdSpan,
  NameSpan,
  PokeballBg,
  PokemonCardStyle,
  PokemonImage,
  TextHolder,
  TypeSpan,
  TypeSpanImage,
} from "./PokemonCard";
import { getTypes } from "../../script/tagType";
import { getColors } from "../../script/colorBg";
import { goToPokeDetails } from "../../Routes/coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { releasePokemon } from "../../script/handleModal";
import Button from "../Shared/Button/Button";
import Warning from "../Shared/Warning/Warning";
import ReleaseWarning from "../Shared/Warning/ReleaseWarning";
import pokeballbg from "../../assets/pokeballbg.png";
import usePokemonContext from "../../Hook/usePokemonContext";

export default function PokemonCard({ handleModal, pokemonCaught, isShiny }) {
  const { change, setChange } = usePokemonContext();

  const [caughtPokemon, setCaughtPokemon] = useState(false);
  const [capture, setCapture] = useState(false);
  const [release, setRelease] = useState(false);

  const image = getTypes(pokemonCaught.type);
  const image2 = getTypes(pokemonCaught.type2);

  const navigate = useNavigate();
  const location = useLocation().pathname;
  const locationIsDex = location.includes("/pokedex");

  return (
    <>
      {release && <ReleaseWarning pokemon={pokemonCaught}></ReleaseWarning>}
      {capture && (
        <Warning setCaughtPokemon={setCaughtPokemon} pokemon={pokemonCaught} />
      )}
      <PokemonCardStyle
        key={pokemonCaught.id}
        display={caughtPokemon ? "none" : "grid"}
      >
        <PokemonImage
          src={!isShiny ? pokemonCaught.image : pokemonCaught.shinyImage}
        />
        <PokeballBg src={pokeballbg} />
        <ContentHolder color={getColors(pokemonCaught.type)}>
          <TextHolder>
            <IdSpan>#{pokemonCaught.id}</IdSpan>
            <NameSpan>{pokemonCaught.name}</NameSpan>
            {!pokemonCaught.type2 ? (
              <TypeSpan>
                <TypeSpanImage src={image} alt="" />
              </TypeSpan>
            ) : (
              <TypeSpan>
                <TypeSpanImage src={image} alt="first pokemon type" />
                <TypeSpanImage src={image2} alt="second pokemon type" />
              </TypeSpan>
            )}
          </TextHolder>

          <ButtonWrapper>
            <DetailsAnchor
              onClick={() => {
                goToPokeDetails(navigate, pokemonCaught.name, isShiny);
              }}
            >
              Details
            </DetailsAnchor>
            {!locationIsDex ? (
              <Button event={() => handleModal(setCapture)} text={"Catch!"} />
            ) : (
              <Button
                color={"#FF6262"}
                event={() =>
                  releasePokemon(
                    pokemonCaught.name,
                    setRelease,
                    change,
                    setChange
                  )
                }
                text={"Release!"}
              />
            )}
          </ButtonWrapper>
        </ContentHolder>
      </PokemonCardStyle>
    </>
  );
}
