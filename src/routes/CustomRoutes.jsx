import { Route, Routes } from "react-router-dom";
import Pokidex from "../components/Pokidex/Pokidex";
import PokemonList from "../components/PokemonList/PokemonList";
import PokemonDetails from "../components/PokemonDetails/PokemonDetails";


 function CustomRoutes(){
  return(

<>

<Routes>
<Route path="/" element={<Pokidex/>}/>
<Route path="/pokemon/:id" element={<PokemonDetails/>}/>
</Routes>

</>
  );
  
 }
  export default CustomRoutes;