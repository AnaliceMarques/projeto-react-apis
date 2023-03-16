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

  const addToPokedex = (namePokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex === namePokemonToAdd
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, namePokemonToAdd];
      setPokedex(newPokedex);
    }
    alert("Gotcha!\nO Pokémon foi adicionado a sua Pokédex");
  };

  const removeFromPokedex = (namePokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex !== namePokemonToRemove
    );

    setPokedex(newPokedex);
    alert("Oh, no!\nO Pokémon foi removido da sua Pokédex");
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
