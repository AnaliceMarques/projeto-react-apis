import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";

export default function PokedexPage() {
  return (
    <>
      <Header />
      <Box
        w={"100%"}
        minH={"84vh"}
        bg={"#DDDDDD"}
        pt="60px"
        pr="40px"
        pl="40px"
      >
        <Heading
          fontSize={"48px"}
          fontFamily={"poppins.700"}
          fontStyle={"bold"}
          color={"#FFFFFF"}
        >
          Meus Pokémons
        </Heading>
        <PokemonCard />
      </Box>
    </>
  );
}
