import React, { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Box, Heading } from "@chakra-ui/react";
import { GlobalContext } from "../../context/GlobalContext";

export default function PokemonsListPage() {
  const { pokedex, listPokemons, isLoading, isLoaded, error, addToPokedex } =
    useContext(GlobalContext);

  const listPokemonsFiltered = () =>
    listPokemons.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  // const listPokemonsFiltered = (listPokemons) => {
  //   const pokemonInPokedex = pokedex.find((pokemonInPokedex) =>listPokemons.name === pokemonInPokedex.name
  //   );
  //   listPokemons.filter((pokemonInList) => {
  //     return !pokedex.find(
  //       (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
  //     );
  //   });
  // // };

  return (
    <>
      <Header />
      <Box w={"100%"} bg={"#5E5E5E"} pt="60px" pr="40px" pl="40px">
        <Heading
          fontSize={"48px"}
          fontFamily={"poppins.700"}
          fontStyle={"bold"}
          color={"#FFFFFF"}
        >
          Todos Pokémons
        </Heading>
        {error
          ? "Erro de requisição, tente novamente mais tarde"
          : isLoading
          ? "Carregando lista de Pokémons..."
          : isLoaded
          ? listPokemonsFiltered().map((pokemon) => {
              return (
                <PokemonCard
                  key={pokemon.name}
                  namePokemon={pokemon.name}
                  addToPokedex={addToPokedex}
                />
              );
            })
          : "Carregando lista de Pokémons..."}
      </Box>
    </>
  );
}
