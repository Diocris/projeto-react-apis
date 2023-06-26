import "./App.css";
import Router from "./Routes/Router";

import { PokemonProvider } from "./Context/PokemonContext";

function App() {
  return (
    <>
      <PokemonProvider>
        <Router />
      </PokemonProvider>
    </>
  );
}

export default App;
