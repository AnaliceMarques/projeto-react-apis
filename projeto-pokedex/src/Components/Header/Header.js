import React from "react";
import LogoPokemon from "../../image/logo-pokemon.png";
import { useLocation, useNavigate } from "react-router-dom";
import {
  goToPokedexPage,
  goToPokemonsListPage,
} from "../../routes/coordinator";
import { Box, Button, Icon, Image } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const arrayPokedex = ["bulbasaur", "picachu", "catchupi"];
  const pokemon = { name: "pika", type: "eletric" };

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Box
            display={"flex"}
            width={"100%"}
            height={"160px"}
            color={"##FFFFFF"}
            justifyContent={"end"}
            alignItems={"center"}
            backgroundImage={LogoPokemon}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
          >
            {/* <Image
              src={LogoPokemon}
              alt="Pokémon"
              width={"307px"}
              height={"113px"}
              mr={"239px"}
            /> */}

            <Button
              bg={"#33A4F5"}
              width={"287px"}
              height={"74px"}
              color={"#FFFFFF"}
              fontFamily={"poppins.700"}
              fontStyle={"bold"}
              fontSize={"24px"}
              transition={"all 0.4s"}
              _active={{
                bg: "#FFFFFF",
                color: "#33A4F5",
                border: "2px",
                borderColor: "#33A4F5",
              }}
              mr={"41px"}
              onClick={() => goToPokedexPage(navigate)}
            >
              Pokédex
            </Button>
          </Box>
        );
      case "/pokedex":
        return (
          <Box
            display={"flex"}
            width={"100%"}
            height={"160px"}
            color={"##FFFFFF"}
            justifyContent="start"
            alignItems={"center"}
            backgroundImage={LogoPokemon}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
          >
            <Button
              variant={"link"}
              color={"#1A1A1A"}
              fontFamily={"poppins"}
              fontSize={"24px"}
              as={"u"}
              ml={"82px"}
              cursor={"pointer"}
              onClick={() => goToPokemonsListPage(navigate)}
            >
              <Icon as={ChevronLeftIcon} />
              Todos Pokémons
            </Button>
            {/* <Image
              src={LogoPokemon}
              alt="Pokémon"
              width={"307px"}
              height={"113px"}
              ml={"256px"}
            /> */}
          </Box>
        );
      case "/details":
        return (
          <Box
            display={"flex"}
            width={"100%"}
            height={"160px"}
            color={"##FFFFFF"}
            justifyContent={"space-between"}
            alignItems={"center"}
            backgroundImage={LogoPokemon}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
          >
            <Button
              variant={"link"}
              color={"#1A1A1A"}
              fontFamily={"poppins"}
              fontSize={"24px"}
              as={"u"}
              ml={"82px"}
              cursor={"pointer"}
              onClick={() => goToPokemonsListPage(navigate)}
            >
              <Icon as={ChevronLeftIcon} />
              Todos Pokémons
            </Button>
            {/* <Image
              src={LogoPokemon}
              alt="Pokémon"
              width={"307px"}
              height={"113px"}
              mr={"301px"}
              ml={"256px"}
            /> */}
            {arrayPokedex.includes(pokemon.name) ? (
              <Button
                bg={"#FF6262"}
                width={"226px"}
                height={"57px"}
                color={"#FFFFFF"}
                fontFamily={"poppins.400"}
                fontSize={"16px"}
                transition={"all 0.4s"}
                _active={{
                  bg: "#FFFFFF",
                  color: "#FF6262",
                  border: "2px",
                  borderColor: "#FF6262",
                }}
                mr={"40px"}
              >
                Excluir da Pokédex
              </Button>
            ) : (
              <Button
                bg={"#33A4F5"}
                width={"226px"}
                height={"57px"}
                color={"#FFFFFF"}
                fontFamily={"poppins.400"}
                fontSize={"16px"}
                transition={"all 0.4s"}
                _active={{
                  bg: "#FFFFFF",
                  color: "#33A4F5",
                  border: "2px",
                  borderColor: "#33A4F5",
                }}
                mr={"40px"}
              >
                Adicionar na Pokédex
              </Button>
            )}
          </Box>
        );
      default:
        return (
          <Box
            display={"flex"}
            width={"100%"}
            height={"160px"}
            color={"##FFFFFF"}
            justifyContent={"start"}
            alignItems={"center"}
            backgroundImage={LogoPokemon}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
          >
            <Button
              variant={"link"}
              color={"#1A1A1A"}
              fontFamily={"poppins"}
              fontSize={"24px"}
              as={"u"}
              ml={"82px"}
              cursor={"pointer"}
              onClick={() => goToPokemonsListPage(navigate)}
            >
              <Icon as={ChevronLeftIcon} />
              Todos Pokémons
            </Button>
            {/* <Image
              src={LogoPokemon}
              alt="Pokémon"
              width={"307px"}
              height={"113px"}
              mr={"301px"}
              ml={"256px"}
            /> */}
          </Box>
        );
    }
  };
  return <>{renderHeader()}</>;
};
