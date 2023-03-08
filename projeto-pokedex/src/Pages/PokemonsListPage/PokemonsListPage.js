import React, { useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../constants/baseURL";
import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { Box, Heading } from "@chakra-ui/react";

export default function PokemonsListPage() {
  const getListPokemons = async () => {
    try {
      const res = await axios.get(`${baseURL}/?limit=21`);
      console.log(res.data.results);
    } catch (err) {
      console.log(err.response);
    }
  };

  // const arrayPokedex = [];

  useEffect(() => {
    getListPokemons();
  }, []);

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
          Todos Pokémons
        </Heading>
        <PokemonCard />
      </Box>
    </>
  );
}
