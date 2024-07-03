  import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './pokemonDetail.css'
  import axios from "axios";
 function PokemonDetails(){
const {id} = useParams();
 const[pokemon, Setpokemon] = useState({})
 async function downloadPokemons(){
   const response  = await  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    // console.log(response.data)

   Setpokemon({
    name: response.data.name,
    image: response.data.sprites.other.dream_world.front_default,
    weight: response.data.weight,
  height: response.data.height,

  types: response.data.types.map((t)=> t.type.name)
   })
 }

  useEffect(()=>{
    downloadPokemons();
  }, []);

  return(
<>
<div  className="pokemonDetails-wrapper">
 
   <img className="pokemon-image" src={pokemon.image} alt="" />
   <div className="pokemon-name">Name:   <span>{pokemon.name}</span></div>
   <div className="pokemon-name"> Height: <span>{pokemon.height}</span></div>
    <div className="pokemon-name">Weight: <span>{pokemon.weight}</span></div>

    {/* <div className="pokemon-types">

     { pokemon.types.map((t)=> <div key={t}> {t}</div> )}
    </div> */}
</div>
</>
  )
 }
  export default PokemonDetails;