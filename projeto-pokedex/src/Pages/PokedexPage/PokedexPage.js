import React, { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../context/GlobalContext";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function PokedexPage() {
  const { pokedex, removeFromPokedex } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <Box w={"100%"} bg={"#5E5E5E"} pt="60px" pr="40px" pb="350px" pl="40px">
        <Heading
          fontSize={"48px"}
          fontFamily={"poppins"}
          fontWeight="700"
          fontStyle={"bold"}
          color={"#FFFFFF"}
        >
          Meus Pokémons
        </Heading>
        {pokedex.length === 0 ? (
          <Text
            fontFamily="poppins"
            fontSize="2rem"
            color={"#FFFFFF"}
            textAlign="center"
            mt="4rem"
          >
            Sua Pokédex está vazia! Vamos capturar alguns Pokémons!
          </Text>
        ) : (
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="start"
            columnGap="1.25rem"
          >
            {pokedex
              .sort((a, b) => a - b)
              .map((pokemon) => (
                <PokemonCard
                  key={pokemon}
                  pokemonId={pokemon}
                  removeFromPokedex={removeFromPokedex}
                />
              ))}
          </Box>
        )}
      </Box>
    </>
  );
}
