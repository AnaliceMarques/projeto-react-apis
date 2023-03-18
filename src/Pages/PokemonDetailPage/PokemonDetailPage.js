import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { useRequestData } from "../../hooks/useRequestData";
import { getTypes } from "../../utils/ReturnPokemonType";
import { getColors } from "../../utils/ReturnCardColor";
import { Box, Heading, Image, Progress, Text } from "@chakra-ui/react";
import PokeballBackgroundDetail from "../../image/pokeball-backgroundDetail.png";

export default function PokemonDetailPage() {
  const location = useLocation();

  const pokemonDetails = location.pathname.slice(9);

  const [pokemon, isLoading, isLoaded, error] = useRequestData(
    {},
    `/${pokemonDetails}`
  );

  const [totalBaseStats, setTotalBaseStats] = useState(0);
  const [listMoves, setListMoves] = useState([]);

  useEffect(() => {
    if (isLoaded) {
      const listBaseStats = pokemon.stats.map((item) => {
        return item.base_stat;
      });
      const total = listBaseStats.reduce((acc, cur) => acc + cur);
      setTotalBaseStats(total);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      const listWithMoves = [];
      for (let i = 0; i < 5; i++) {
        const movesPokemon = pokemon.moves[i].move.name;
        listWithMoves.push(movesPokemon);
      }
      setListMoves(listWithMoves);
    }
  }, [isLoaded]);

  return (
    <>
      <Header />
      {!isLoaded ? (
        <Text fontFamily="poppins" fontSize="2rem" color="#FFFFFF">
          Carregando detalhes do pokemon...
        </Text>
      ) : (
        <Box
          width="100%"
          backgroundColor="#5E5E5E"
          pt="3.75rem"
          pr="1.616rem"
          pb="10.188rem"
          pl="1.563rem"
          backgroundImage={PokeballBackgroundDetail}
          backgroundRepeat="no-repeat"
          backgroundPosition="top"
          backgroundSize="contain"
        >
          <Heading
            fontSize="3rem"
            fontFamily="poppins"
            fontWeight="700"
            fontStyle="bold"
            color="#FFFFFF"
          >
            Detalhes
          </Heading>
          <Box
            backgroundColor={getColors(pokemon.types[0].type.name)}
            width="86.821rem"
            height="41.438rem"
            borderRadius="2.368rem"
            mt="3.5rem"
            pt="1.625rem"
            pb="1.625rem"
            pl="2.75rem"
            backgroundImage={PokeballBackgroundDetail}
            backgroundRepeat="no-repeat"
            backgroundPosition="right"
            backgroundSize="fit"
            position="relative"
          >
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={`Imagem do pokémon ${pokemon.name}`}
              width="16.875rem"
              height="16.875rem"
              position="absolute"
              top="-8.25rem"
              right="2.196rem"
            />

            <Box display="flex">
              <Box mr="2.125rem">
                <Box
                  width="17.625rem"
                  height="17.625rem"
                  border="0.125rem"
                  borderColor="#FFFFFF"
                  borderRadius="0.5rem"
                  backgroundColor="#FFFFFF"
                  mb="2.938rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    src={
                      pokemon.sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt={`Animação do ${pokemon.name} de frente`}
                    height="5.875rem"
                  />
                </Box>
                <Box
                  width="17.625rem"
                  height="17.625rem"
                  border="0.125rem"
                  borderColor="#FFFFFF"
                  borderRadius="0.5rem"
                  backgroundColor="#FFFFFF"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    src={
                      pokemon.sprites.versions["generation-v"]["black-white"]
                        .animated.back_default
                    }
                    alt={`Animação do ${pokemon.name} de costas`}
                    height="5.875rem"
                  />
                </Box>
              </Box>

              <Box
                width="21.438rem"
                height="38.313rem"
                borderColor="#FFFFFF"
                borderRadius="0.75rem"
                backgroundColor="#FFFFFF"
                mr="4.25rem"
                pt="1.188rem"
                pr="1.125rem"
                pl="1.125rem"
              >
                <Text fontFamily="Inter" fontSize="1.5rem" mb="1rem">
                  Base stats
                </Text>
                <Box
                  display="grid"
                  gridTemplateColumns={"1fr 1fr 3fr"}
                  alignItems="start"
                >
                  <Box color="gray" display="grid" justifyItems="end">
                    <Text>HP</Text>
                    <Text>Attack</Text>
                    <Text>Defense</Text>
                    <Text>Sp. Atk</Text>
                    <Text>Sp. Def</Text>
                    <Text>Speed</Text>
                    <Text>Total</Text>
                  </Box>
                  <Box ml="1.2rem">
                    {pokemon.stats.map((item) => {
                      return (
                        <Text key={item.stat.name}> {item.base_stat}</Text>
                      );
                    })}
                    <Text fontWeight="bold">{totalBaseStats}</Text>
                  </Box>
                  <Box mt="0.4rem">
                    {pokemon.stats.map((item) => {
                      return (
                        <Progress
                          key={item.stat.name}
                          value={item.base_stat}
                          backgroundColor="transparent"
                          colorScheme={
                            item.base_stat > 50 ? "yellow" : "orange"
                          }
                          borderRadius="0.2rem"
                          mb="0.75rem"
                        />
                      );
                    })}
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Box fontFamily="Inter" color="#FFFFFF">
                    <Text fontSize="1rem">
                      {pokemon.id < 10 ? `#0${pokemon.id}` : `#${pokemon.id}`}
                    </Text>
                    <Text textTransform="capitalize" fontSize="3rem">
                      {pokemon.name}
                    </Text>
                  </Box>
                  <Box display="flex">
                    {pokemon.types.map((element) => {
                      return (
                        <Image
                          key={element.type.name}
                          src={getTypes(element.type.name)}
                          alt={`Card com Habilidade do Pokemon: ${element.type.name}`}
                          height="1.938rem"
                          mr="0.438rem"
                        />
                      );
                    })}
                  </Box>
                </Box>
                <Box
                  width="18.25rem"
                  height="27.313rem"
                  borderColor="#FFFFFF"
                  borderRadius="0.5rem"
                  backgroundColor="#FFFFFF"
                  mt="2.938rem"
                  pt="1.125rem"
                  pl="1.125rem"
                >
                  <Text fontFamily="Inter" fontSize="1.5rem" mb="1rem">
                    Moves:
                  </Text>
                  <Box display="grid" justifyItems="start" gap="1.25rem">
                    {listMoves.map((move) => {
                      return (
                        <Text
                          key={move}
                          height="2.313rem"
                          borderRadius="0.75rem"
                          border="0.063rem"
                          borderStyle="dashed"
                          borderColor="gray"
                          textAlign="center"
                          backgroundColor="#ECECEC"
                          fontFamily="Montserrat"
                          fontSize="0.875rem"
                          fontWeight="400"
                          p="0.625rem"
                          textTransform="capitalize"
                        >
                          {move}
                        </Text>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      <Footer />
    </>
  );
}
