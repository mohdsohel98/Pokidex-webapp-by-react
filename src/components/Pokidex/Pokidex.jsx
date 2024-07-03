import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
 import './Pokidex.css'

 function Pokidex (){


  return(
    <>
 <div className="pokidex-wrapper">


  <Search/>
 <PokemonList/>

 </div>
    
    </>
  )
 }

  export default  Pokidex;