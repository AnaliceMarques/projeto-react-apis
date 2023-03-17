import React, { useContext } from "react";
import LogoPokemon from "../../image/logo-pokemon.png";
import { useLocation, useNavigate } from "react-router-dom";
import {
  goToPokedexPage,
  goToPokemonsListPage,
} from "../../routes/coordinator";
import { GlobalContext } from "../../context/GlobalContext";
import { AddAndRemoveModal } from "../Modal/AddAndRemoveModal";
import {
  Button,
  Grid,
  GridItem,
  Icon,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { pokedex, addToPokedex, removeFromPokedex } =
    useContext(GlobalContext);

  const idPokemonDetails = Number(location.pathname.slice(9));

  const pokemonInPokedex = pokedex.includes(idPokemonDetails);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid
      templateColumns={"1fr 1fr 1fr"}
      alignItems="center"
      justifyItems="center"
      width="100%"
      height="10rem"
      color="##FFFFFF"
    >
      <GridItem>
        {location.pathname !== "/" ? (
          <Button
            variant="link"
            color="#1A1A1A"
            fontFamily="poppins"
            fontSize="1.5rem"
            as="u"
            cursor="pointer"
            onClick={() => goToPokemonsListPage(navigate)}
          >
            <Icon as={ChevronLeftIcon} />
            Todos Pokémons
          </Button>
        ) : (
          ""
        )}
      </GridItem>
      <GridItem>
        <Image
          src={LogoPokemon}
          alt="Logo Pokémon"
          width="19.188rem"
          height="7.063rem"
        />
      </GridItem>
      <GridItem>
        {location.pathname === "/" ? (
          <Button
            bg="#33A4F5"
            width="17.938rem"
            height="4.625rem"
            color="#FFFFFF"
            fontFamily="poppins"
            fontWeight="700"
            fontStyle="bold"
            fontSize="1.5rem"
            transition="all 0.4s"
            _active={{
              bg: "#FFFFFF",
              color: "#33A4F5",
              border: "0.125rem",
              borderColor: "#33A4F5",
            }}
            onClick={() => goToPokedexPage(navigate)}
          >
            Pokédex
          </Button>
        ) : location.pathname === `/details/${idPokemonDetails}` ? (
          <Button
            bg={pokemonInPokedex ? "#FF6262" : "#33A4F5"}
            width={"226px"}
            height={"57px"}
            color="#FFFFFF"
            fontFamily="poppins"
            fontWeight="400"
            fontSize="1rem"
            transition={"all 0.4s"}
            _active={
              pokemonInPokedex
                ? {
                    bg: "#FFFFFF",
                    color: "#FF6262",
                    border: "2px",
                    borderColor: "#FF6262",
                  }
                : {
                    bg: "#FFFFFF",
                    color: "#33A4F5",
                    border: "2px",
                    borderColor: "#33A4F5",
                  }
            }
            onClick={
              pokemonInPokedex
                ? () => removeFromPokedex(idPokemonDetails, onOpen, onClose)
                : () => addToPokedex(idPokemonDetails, onOpen, onClose)
            }
          >
            {" "}
            {pokemonInPokedex ? "Excluir da Pokédex" : "Adicionar na Pokédex"}
          </Button>
        ) : (
          ""
        )}
      </GridItem>
      <AddAndRemoveModal
        isOpen={isOpen}
        onClose={onClose}
        pokemon={idPokemonDetails}
      />
    </Grid>
  );
};
