import { useParams, useLocation } from "react-router-dom";

import {
  DetailsWrapper,
  ImagesDiv,
  InfoDiv,
  MovesHolder,
  MovesTag,
  PokeImageDiv,
  PokemonDetailHolder,
  StatStyle,
  StatsDiv,
} from "./PokemonDetailStyle";
import axios from "axios";
import { useEffect, useState } from "react";
import { getTypes } from "../../script/tagType";
import { getColors } from "../../script/colorBg";
import { BASE_URL } from "../../Constants/baseUrl";

export default function PokemonDetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();

  const locate = useLocation();
  const isShiny = locate.pathname.includes("shiny");

  const [pokemon, setPokemon] = useState({});

  //update always with the new pokemon that are beeing seen
  useEffect(() => {
    getPokemonData(params.id);
  }, [params]);

  //creates pokemon object
  const getPokemonData = async (params) => {
    try {
      const response = await axios.get(`${BASE_URL}/${params}`);

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
          : response.data.sprites.front_shiny,

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

  //create state to store status value
  const [stats, setStats] = useState();
  //when pokemon is loaded, run the setStats
  useEffect(() => {
    handleStats();
  }, [pokemon]);
  //

  const [total, setTotal] = useState(0);

  //sum all stats
  useEffect(() => {
    if (pokemon.stats) {
      const totalStats = pokemon.stats.reduce(
        (sum, objt) => sum + objt.base_stat,
        0
      );
      setTotal(totalStats);
    }
  }, [pokemon.stats]);

  const handleStats = () => {
    if (pokemon.stats) {
      setStats(
        pokemon.stats.map((stat, index) => {
          return (
            <StatStyle key={index} widthStat={stat.base_stat}>
              <span>{stat.stat.name}</span>
              <span>{stat.base_stat}</span>
              <div></div>
            </StatStyle>
          );
        })
      );
    }
  };

  return (
    <>
      <DetailsWrapper>
        <h1 style={{ color: "white" }}>Pokemon Details</h1>

        <PokemonDetailHolder
          color={pokemon.types && getColors(pokemon.types[0].type.name)}
        >
          <ImagesDiv>
            <div>
              <img src={pokemon.frontSprite} />
            </div>
            <div>
              <img src={pokemon.backSprite} />
            </div>
          </ImagesDiv>
          <StatsDiv>
            <div>
              <h3>Base stats</h3>
              {pokemon.stats && stats}
              <div style={{ borderBottom: "1px solid #F0F0F0" }}>
                <p style={{ paddingLeft: "3rem" }}> Total stats: {total}</p>
              </div>
            </div>
          </StatsDiv>
          <InfoDiv>
            <div>
              <p>#{pokemon.id}</p>
              <p>{pokemon.name}</p>
              {pokemon.types && (
                <div>
                  <img src={getTypes(pokemon.types[0].type.name)} />
                  {pokemon.types[1] && (
                    <img src={getTypes(pokemon.types[1].type.name)} />
                  )}
                </div>
              )}
            </div>

            <MovesHolder>
              {pokemon.moves && (
                <>
                  <MovesTag>{pokemon.moves[11].move.name}</MovesTag>
                  <MovesTag>{pokemon.moves[22].move.name}</MovesTag>
                  <MovesTag>{pokemon.moves[33].move.name}</MovesTag>
                  <MovesTag>{pokemon.moves[44].move.name}</MovesTag>
                </>
              )}
            </MovesHolder>
          </InfoDiv>
          <PokeImageDiv>
            <img src={pokemon.mainSprite}></img>
          </PokeImageDiv>
        </PokemonDetailHolder>
      </DetailsWrapper>
    </>
  );
}
