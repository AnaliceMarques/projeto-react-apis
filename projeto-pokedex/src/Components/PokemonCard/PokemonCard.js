import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { goToPokemonDetailPage } from "../../routes/coordinator";
import { useRequestData } from "../../hooks/useRequestData";
import { getTypes } from "../../utils/ReturnPokemonType";
import { getColors } from "../../utils/ReturnCardColor";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";

export const PokemonCard = ({
  namePokemon,
  addToPokedex,
  removeFromPokedex,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [pokemon, isLoading, isLoaded, error] = useRequestData(
    {},
    `/${namePokemon}`
  );
  // console.log(pokemon);

  return (
    <>
      {!isLoaded ? (
        " "
      ) : (
        // (
        // <Box>
        //   <Box
        //     bg={"gray"}
        //     color={"white"}
        //     width={"27.5rem"}
        //     height={"13.125rem"}
        //   >
        //     <Text>
        //       {pokemon.id < 10 ? `#0${pokemon.id}` : `#${pokemon.id}`}
        //     </Text>
        //     <Text textTransform={"capitalize"} size="md">
        //       {pokemon.name}
        //     </Text>
        //  {pokemon.types.map((element) => {
        //   return (
        //     <Image
        //       key={element.type.name}
        //       src={getTypes(element.type.name)}
        //       alt={element.type.name}
        //     />
        //   );
        // })}

        // <Image
        //       src={pokemon.sprites.other["official-artwork"].front_default}
        //       alt={pokemon.name}
        //       borderRadius="lg"
        //       w="193px"
        //       h="193px"
        //     />

        //     <Button
        //       variant="link"
        //       cursor={"pointer"}
        //       colorScheme="blue"
        //       as={"u"}
        //       onClick={() => goToPokemonDetailPage(navigate)}
        //     >
        //       Detalhes
        //     </Button>

        //     {location.pathname === "/" ? (
        //       <Button
        //         variant="solid"
        //         colorScheme="blue"
        //         onClick={() => addToPokedex(pokemon)}
        //       >
        //         Capturar!
        //       </Button>
        //     ) : (
        //       <Button
        //         variant="solid"
        //         colorScheme="blue"
        //         bg="#FF6262"
        //         onClick={() => removeFromPokedex()}
        //       >
        //         Remover
        //       </Button>
        //     )}
        //   </Box>
        // </Box>
        // )
        <Card maxW="sm" bgColor={getColors(pokemon.types[0].type.name)}>
          <CardBody display="flex" justifyContent="space-between">
            <Stack mt="6" spacing="3">
              <Text>
                {pokemon.id < 10 ? `#0${pokemon.id}` : `#${pokemon.id}`}
              </Text>
              <Heading size="md">{pokemon.name}</Heading>
              {/* <Text color="blue.600" fontSize="2xl"> */}
              {pokemon.types.map((element) => {
                return (
                  <Image
                    key={element.type.name}
                    src={getTypes(element.type.name)}
                    alt={element.type.name}
                  />
                );
              })}
              {/* </Text> */}
            </Stack>
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              borderRadius="lg"
              w="193px"
              h="193px"
            />
          </CardBody>
          <CardFooter display="flex" justifyContent="space-between">
            <ButtonGroup spacing="2">
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() => goToPokemonDetailPage(navigate, pokemon)}
              >
                Detalhes
              </Button>

              {location.pathname === "/" ? (
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => addToPokedex(pokemon.name)}
                >
                  Capturar!
                </Button>
              ) : (
                <Button
                  variant="solid"
                  colorScheme="blue"
                  bg="#FF6262"
                  onClick={() => removeFromPokedex(pokemon.name)}
                >
                  Remover
                </Button>
              )}
            </ButtonGroup>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

// {pokemon.data.types.map((types, index) => {
//   return <div key={index}>{types.type.name}</div>;
// })}
// Suzane Moura15:39
// {pokemon.types.map((type) => {
// return (
// <Image
//   key={type.type.name}
//   src={getTypes(type.type.name)}
//   alt={`Imagem de Habilidade do Pokemon: Habilidade de ${type.type.name}`}
// />
// );
// })}
