import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonsListPage from "../pages/PokemonsListPage/PokemonsListPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage";
import ErrorPage from "../pages/ErroPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PokemonsListPage />} />
        <Route path="pokedex" element={<PokedexPage />} />
        <Route path="details" element={<PokemonDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
