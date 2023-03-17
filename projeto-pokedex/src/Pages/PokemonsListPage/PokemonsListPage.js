import React, { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Box, Heading, Text } from "@chakra-ui/react";
import { GlobalContext } from "../../context/GlobalContext";

export default function PokemonsListPage() {
  const { pokedex, listPokemons, isLoaded, error, addToPokedex } =
    useContext(GlobalContext);

  const listPokemonsFiltered = () => {
    if (isLoaded) {
      return listPokemons
        .map((pokemon) => {
          return pokemon.url.slice(34, -1);
        })
        .filter(
          (pokemonInList) =>
            !pokedex.find(
              (pokemonInPokedex) => Number(pokemonInList) === pokemonInPokedex
            )
        );
    }
  };

  return (
    <>
      <Header />
      <Box w={"100%"} bg={"#5E5E5E"} pt="60px" pr="40px" pb="305px" pl="40px">
        <Heading
          fontSize={"48px"}
          fontFamily={"poppins"}
          fontWeight="700"
          fontStyle={"bold"}
          color={"#FFFFFF"}
        >
          Todos Pokémons
        </Heading>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="start"
          columnGap="1.25rem"
        >
          {error ? (
            <Text fontFamily="poppins" fontSize="2rem" color={"#FFFFFF"}>
              Estamos com problema no servidor, tente novamente mais tarde
            </Text>
          ) : !isLoaded ? (
            <Text fontFamily="poppins" fontSize="2rem" color={"#FFFFFF"}>
              Carregando lista de Pokémons...
            </Text>
          ) : (
            listPokemonsFiltered().map((pokemon) => {
              return (
                <PokemonCard
                  key={pokemon}
                  pokemonId={pokemon}
                  addToPokedex={addToPokedex}
                />
              );
            })
          )}
        </Box>
      </Box>
    </>
  );
}
