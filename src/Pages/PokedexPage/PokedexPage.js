import React, { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../context/GlobalContext";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function PokedexPage() {
  const { pokedex, removeFromPokedex } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <Box
        width="100%"
        backgroundColor="#5E5E5E"
        pt="3.75rem"
        px="2.5rem"
        pb="21.875rem"
      >
        <Heading
          fontSize="3rem"
          fontFamily="poppins"
          fontWeight="700"
          fontStyle="bold"
          color="#FFFFFF"
        >
          Meus Pokémons
        </Heading>
        {pokedex.length === 0 ? (
          <Text
            fontFamily="poppins"
            fontSize="2rem"
            color="#FFFFFF"
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
      <Footer />
    </>
  );
}
