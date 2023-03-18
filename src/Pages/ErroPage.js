import React from "react";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function ErrorPage() {
  return (
    <>
      <Header />
      <Box
        width="100%"
        height="75vh"
        backgroundColor="#5E5E5E"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          fontSize="3rem"
          fontFamily="poppins"
          fontWeight="700"
          fontStyle="bold"
          color="#FFFFFF"
          textAlign="center"
        >
          Ops! A Equipe Rocket levou esta página.
        </Heading>
        <Text fontSize="1.5rem" fontFamily="poppins" color="#FFFFFF">
          Página inexistente
        </Text>
      </Box>
      <Footer />
    </>
  );
}
