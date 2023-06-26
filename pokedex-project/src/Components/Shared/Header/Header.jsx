import { PokemonListPageHeader, PokeName } from "./HeaderStyle";
import { goBack, goToPokedexPage } from "../../../Routes/coordinator";
import pokelogo from "../../../assets/pokemonlogo.png";
import backarrow from "../../../assets/backarrow.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { caughtPokemons } from "../../../script/caughtPokemons";
import Warning from "../Warning/Warning";
import usePokemonContext from "../../../Hook/usePokemonContext";
import { handleModal, releasePokemon } from "../../../script/handleModal";
import ReleaseWarning from "../Warning/ReleaseWarning";

export default function Header() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    scrollToTop;
  }, []);
  const navigate = useNavigate();

  const { pokemons, change, setChange } = usePokemonContext();
  const location = useLocation().pathname;
  const locationWords = location.split("/");
  const removeFirstPart = "details";
  const removeSecondPart = "shiny";
  const removedFirstPart = locationWords.filter(
    (word) => word !== removeFirstPart
  );
  const removedSecondPart = removedFirstPart.filter(
    (word) => word !== removeSecondPart
  );
  const pokemonName = removedSecondPart.join("");

  const isPokeDetail = location.includes("/details/");
  const [isCaught, setIsCaught] = useState(false);

  useEffect(() => {
    const checkCaught = caughtPokemons.some((caught) => {
      return caught.name === pokemonName;
    });
    setIsCaught(checkCaught);
  }, [location]);

  const [release, setRelease] = useState(false);

  const [capture, setCapture] = useState(false);

  const [caughtPokemon, setCaughtPokemon] = useState(false);

  const newPoke = pokemons.filter((newPokemon) => {
    return newPokemon.name === pokemonName;
  });

  const newCaught = newPoke.map((pokemon) => {
    return {
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
      shiny: location.includes("shiny") ? true : false,
    };
  });

  const catchPokemon = () => {
    setChange(change + 1);
    handleModal(setCapture);
  };

  function goToDex(timer) {
    setTimeout(() => {
      navigate("/pokedex");
    }, timer);
  }
  return (
    <>
      {capture && (
        <Warning
          setCaughtPokemon={setCaughtPokemon}
          pokemon={newCaught[0]}
          goToDex={goToDex}
        />
      )}
      {release && (
        <ReleaseWarning
          pokemon={newCaught[0]}
          goToDex={goToDex}
        ></ReleaseWarning>
      )}
      {location === "/" && (
        <PokemonListPageHeader>
          <button
            style={{ visibility: "hidden" }}
            onClick={() => {
              goBack(navigate);
            }}
          >
            <img src={backarrow} />
            All Pokemons
          </button>
          <img src={pokelogo} alt="Pokemon logo" onClick={scrollToTop} />
          <button
            onClick={() => {
              goToPokedexPage(navigate);
            }}
          >
            Pokedex
          </button>
        </PokemonListPageHeader>
      )}
      {location === "/pokedex" && (
        <PokemonListPageHeader>
          <button
            onClick={() => {
              goBack(navigate);
            }}
          >
            <img src={backarrow} />
            All Pokemons
          </button>
          <img src={pokelogo} alt="Pokemon logo" onClick={scrollToTop} />
          <button
            style={{ visibility: "hidden" }}
            onClick={() => {
              goToPokedexPage(navigate);
            }}
          >
            Pokedex
          </button>
        </PokemonListPageHeader>
      )}

      {location.includes("/details") && (
        <PokemonListPageHeader>
          <button
            onClick={() => {
              goBack(navigate);
            }}
          >
            <img src={backarrow} />
            All Pokemons
          </button>
          <img src={pokelogo} alt="Pokemon logo" onClick={scrollToTop} />

          {isCaught ? (
            <button
              className="release"
              onClick={() =>
                releasePokemon(
                  newPoke[0].name,
                  setRelease,
                  change,
                  setChange,
                  setIsCaught
                )
              }
            >
              Release!
            </button>
          ) : (
            <button onClick={catchPokemon}>Catch!</button>
          )}
        </PokemonListPageHeader>
      )}
    </>
  );
}
