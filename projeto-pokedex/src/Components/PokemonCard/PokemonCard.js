import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { goToPokemonDetailPage } from "../../routes/coordinator";

export const PokemonCard = () => {
  const location = useLocation()
  const navigate = useNavigate();
 
  return (
    <div>
      <div>Pokémon</div>
      <button onClick={() => goToPokemonDetailPage(navigate)}>Detalhes</button>
      {location.pathname==="/"?<button>Capturar!</button>:<button>Remover da Pokedex</button>}
          </div>
  );
};
