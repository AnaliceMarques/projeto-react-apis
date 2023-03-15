import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useRequestData } from "../../hooks/useRequestData";
import { Box, Text } from "@chakra-ui/react";

export default function PokemonDetailPage() {
  const location = useLocation();

  const pokemonInDetails = location.pathname.slice(9);

  const [pokemon, isLoading, isLoaded, error] = useRequestData(
    {},
    `/${pokemonInDetails}`
  );

  return (
    <div>
      <Header />
      <Text>{pokemon.name}</Text>
    </div>
  );
}
