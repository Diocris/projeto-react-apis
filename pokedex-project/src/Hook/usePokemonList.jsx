import { BASE_URL } from "../Constants/baseUrl";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { caughtPokemons } from "../script/caughtPokemons";
export const usePokemonList = () => {
  const [change, setChange] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    //Requisição inicial
    axios
      .get(`${BASE_URL}?limit=151&offset=0`)
      //Resposta requisição =>  responseAPI retorna objeto da requisição inicial, informações brutas como status e data
      .then((responseAPI) => {
        //Percorre o caminho na resposta, armazenando os resultados => responseDataResults retorna uma array de objetos, cada objeto possui o nome e o url de um pokemon
        const responseDataResults = responseAPI.data.results;
        //Função que "promete" uma resposta, o metodo all() salva estas respostas em uma array
        Promise.all(
          //Individualiza data objeto da array responseDataResults => pokemonsAPI retorna objeto pokemon unitário com nome e url do pokemon
          responseDataResults.map((pokemonsAPI) => {
            //Acessa de forma individual cada URL
            return (
              axios
                .get(pokemonsAPI.url)
                //Resposta da requisição => retorna objeto da requisição, já individualizado as informações brutas individuais de cada pokemon
                .then((pokemonResponseAPI) => {
                  //Percorre o caminho na resposta, retornando os dados da resposta da aquisição
                  return pokemonResponseAPI.data;
                })
            );
          })
        )
          //Age sobre o Promise.all, retorna uma array de objetos, nos quais estes objetos são os dados individuais prontos para serem acessados, através de suas chaves
          .then((pokemonDataUnit) => {
            //seta na variavel de estado a array retornada como resposta final.
            setPokemons(pokemonDataUnit);
          });
      })

      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const [caughtList, setCaughtList] = useState([]);

  useEffect(() => {
    setCaughtList(caughtPokemons);
  }, [change]);

  const pokemonList = pokemons.filter((pokemon) => {
    return caughtList.every((caugth) => {
      return pokemon.name !== caugth.name;
    });
  });

  const pokeDexList = pokemons.filter((pokemon) => {
    return caughtList.some((caugth) => {
      return caugth.name === pokemon.name;
    });
  });

  return { pokemons, pokeDexList, pokemonList, change, setChange };
};
