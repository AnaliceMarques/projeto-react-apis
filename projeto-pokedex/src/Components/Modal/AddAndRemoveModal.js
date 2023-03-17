import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function AddAndRemoveModal({ isOpen, onClose, pokemon }) {
  const location = useLocation();
  const { pokedex } = useContext(GlobalContext);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          width="28.188rem"
          height="13.875rem"
          borderRadius="0.75rem"
        >
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontFamily="poppins" fontWeight="700" fontSize="3rem">
              {location.pathname === "/" || !pokedex.includes(pokemon)
                ? "Gotcha!"
                : "Oh, no!"}
            </Text>
            <Text fontFamily="poppins" fontWeight="700" fontSize="1rem">
              {location.pathname === "/" || !pokedex.includes(pokemon)
                ? "O Pokémon foi adicionado a sua Pokedéx"
                : "O Pokémon foi removido da sua Pokedéx"}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
