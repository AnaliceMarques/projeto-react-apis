import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header/Header";

export default function ErrorPage() {
  return (
    <>
      <Header />
      <Box w={"100%"} bg={"#5E5E5E"} pt="60px" pr="40px" pl="40px">
        <Heading
          fontSize={"48px"}
          fontFamily={"poppins.700"}
          fontStyle={"bold"}
          color={"#FFFFFF"}
        >
          Página não encontrada
        </Heading>
      </Box>
    </>
  );
}
