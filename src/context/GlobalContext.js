import { createContext, useEffect, useState } from "react";
import { useRequestData } from "../hooks/useRequestData";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [pokedex, setPokedex] = useState([]);
  const [listPokemons, setListPokemons] = useState([]);

  const [data, isLoading, isLoaded, error] = useRequestData([], "/?limit=30");

  useEffect(() => {
    if (isLoaded) {
      setListPokemons(data.results);
    }
  }, [isLoaded]);

  const addToPokedex = (idPokemonToAdd, onOpen, onClose) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex === idPokemonToAdd
    );

    if (!isAlreadyOnPokedex) {
      onOpen();
      setTimeout(() => {
        onClose();
        const newPokedex = [...pokedex, idPokemonToAdd];
        setPokedex(newPokedex);
      }, 1000);
    }
  };

  const removeFromPokedex = (idPokemonToRemove, onOpen, onClose) => {
    onOpen();
    setTimeout(() => {
      onClose();
      const newPokedex = pokedex.filter(
        (pokemonInPokedex) => pokemonInPokedex !== idPokemonToRemove
      );

      setPokedex(newPokedex);
    }, 1000);
  };

  return (
    <GlobalContext.Provider
      value={{
        pokedex,
        setPokedex,
        listPokemons,
        setListPokemons,
        isLoading,
        isLoaded,
        error,
        addToPokedex,
        removeFromPokedex,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
