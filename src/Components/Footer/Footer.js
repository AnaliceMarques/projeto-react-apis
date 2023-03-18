import React from "react";
import LogoPokemon from "../../image/logo-pokemon.png";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box
      height="8rem"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="0.75rem"
    >
      <Image src={LogoPokemon} alt="Logo Pokémon" height="2.5rem" />

      <Text fontFamily="poppins" fontSize="0.75rem">
        Desenvolvido por Analice Marques.
      </Text>
      <Box>
        <Link href="https://github.com/AnaliceMarques" target="blank">
          <Icon as={FaGithub} mr="0.75rem" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/analicemarquessl"
          target="blank"
        >
          <Icon as={FaLinkedin} />
        </Link>
      </Box>
    </Box>
  );
};
