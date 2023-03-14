import { createContext, useEffect, useState } from "react";
import { useRequestData } from "../hooks/useRequestData";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [pokedex, setPokedex] = useState([]);
  const [listPokemons, setListPokemons] = useState([]);

  const [data, isLoading, isLoaded, error] = useRequestData([], "/?limit=21");

  useEffect(() => {
    if (isLoaded) {
      setListPokemons(data.results);
    }
  }, [isLoaded]);

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    console.log(pokemonToRemove);
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
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
