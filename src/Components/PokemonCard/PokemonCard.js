import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { goToPokemonDetailPage } from "../../routes/coordinator";
import { useRequestData } from "../../hooks/useRequestData";
import { getTypes } from "../../utils/ReturnPokemonType";
import { getColors } from "../../utils/ReturnCardColor";
import { AddAndRemoveModal } from "../Modal/AddAndRemoveModal";
import { Image, Text, Button, Box, useDisclosure } from "@chakra-ui/react";
import PokeballBackground from "../../image/pokeball-background.png";

export const PokemonCard = ({ pokemonId, addToPokedex, removeFromPokedex }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [pokemon, isLoading, isLoaded, error] = useRequestData(
    {},
    `/${pokemonId}`
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {!isLoaded ? (
        " "
      ) : (
        <Box
          width="27.5rem"
          height="16.625rem"
          position="relative"
          display="flex"
          alignItems="end"
        >
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={`Imagem do pokémon ${pokemon.name}`}
            width="12.063rem"
            height="12.063rem"
            position="absolute"
            top="0"
            right="0"
          />
          <Box
            backgroundColor={getColors(pokemon.types[0].type.name)}
            width="27.5rem"
            height="13.125rem"
            borderRadius="0.75rem"
            pt="1.563rem"
            pl="1.438rem"
            backgroundImage={PokeballBackground}
            backgroundRepeat="no-repeat"
            backgroundPosition="right"
          >
            <Box fontFamily="Inter" color="#FFFFFF">
              <Text fontSize="1rem">
                {pokemon.id < 10 ? `#0${pokemon.id}` : `#${pokemon.id}`}
              </Text>
              <Text textTransform="capitalize" fontSize="2rem">
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
            <Box
              display="flex"
              justifyContent="space-between"
              mr="1.375rem"
              mt="1.188rem"
            >
              <Button
                variant="link"
                fontFamily="poppins"
                fontSize="1rem"
                fontWeight="700"
                color="#FFFFFF"
                cursor="pointer"
                as="u"
                onClick={() => goToPokemonDetailPage(navigate, pokemon.id)}
              >
                Detalhes
              </Button>

              {location.pathname === "/" ? (
                <Button
                  variant="solid"
                  backgroundColor="#FFFFFF"
                  height="2.375rem"
                  width="9.125rem"
                  borderRadius="0.5rem"
                  py="0.25rem"
                  px="0.625rem"
                  fontFamily="poppins"
                  fontSize="1rem"
                  fontWeight="400"
                  color="#0F0F0F"
                  onClick={() => addToPokedex(pokemon.id, onOpen, onClose)}
                >
                  Capturar!
                </Button>
              ) : (
                <Button
                  variant="solid"
                  backgroundColor="#FF6262"
                  height="2.375rem"
                  width="9.125rem"
                  borderRadius="0.5rem"
                  py="0.25rem"
                  px="0.625rem"
                  fontFamily="poppins"
                  fontSize="1rem"
                  fontWeight="400"
                  color="#FFFFFF"
                  onClick={() => removeFromPokedex(pokemon.id, onOpen, onClose)}
                >
                  Excluir
                </Button>
              )}
              <AddAndRemoveModal
                isOpen={isOpen}
                onClose={onClose}
                pokemon={pokemon.id}
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
