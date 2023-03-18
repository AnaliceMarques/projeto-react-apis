import React, { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../context/GlobalContext";
import { Box, Heading, Text } from "@chakra-ui/react";

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
      <Box
        width="100%"
        backgroundColor="#5E5E5E"
        pt="3.75rem"
        px="2.5rem"
        pb="19.063rem"
      >
        <Heading
          fontSize="3rem"
          fontFamily="poppins"
          fontWeight="700"
          fontStyle="bold"
          color="#FFFFFF"
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
            <Text fontFamily="poppins" fontSize="2rem" color="#FFFFFF">
              Estamos com problema no servidor, tente novamente mais tarde
            </Text>
          ) : !isLoaded ? (
            <Text fontFamily="poppins" fontSize="2rem" color="#FFFFFF">
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
      <Footer />
    </>
  );
}
