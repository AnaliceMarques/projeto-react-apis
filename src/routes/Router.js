import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import ErrorPage from "../Pages/ErroPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PokemonsListPage />} />
        <Route path="pokedex" element={<PokedexPage />} />
        <Route path="details/:pokemon" element={<PokemonDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
