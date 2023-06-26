import Header from "../Components/Shared/Header/Header";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<PokemonListPage />} />
          <Route path="/details/:id" element={<PokemonDetailPage />} />
          <Route path="/details/:id/shiny" element={<PokemonDetailPage />} />
          <Route path="/pokedex" element={<PokedexPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
