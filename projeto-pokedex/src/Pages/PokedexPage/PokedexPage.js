import React, { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../context/GlobalContext";
import { Box, Heading } from "@chakra-ui/react";

export default function PokedexPage() {
  const { pokedex, removeFromPokedex } = useContext(GlobalContext);

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
          Meus Pokémons
        </Heading>
        {pokedex.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            namePokemon={pokemon.name}
            removeFromPokedex={removeFromPokedex}
          />
        ))}
      </Box>
    </>
  );
}
