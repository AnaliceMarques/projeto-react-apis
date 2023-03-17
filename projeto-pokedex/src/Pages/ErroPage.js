import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header/Header";

export default function ErrorPage() {
  return (
    <>
      <Header />
      <Box
        w="100%"
        h="75vh"
        bgColor="#5E5E5E"
        display="flex"
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
          Página não encontrada!
        </Heading>
      </Box>
    </>
  );
}
