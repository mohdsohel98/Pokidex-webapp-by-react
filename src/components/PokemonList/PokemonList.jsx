import { useEffect, useState } from "react";
 import './PokimonList.css'
 import axios from 'axios'
import Pokemon from "../Pokemon/Pokemin";
 function PokemonList(){

 const [pokemonList, setpokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


 const [pokedeskUrl, setPokedeskUrl] =  useState('https://pokeapi.co/api/v2/pokemon')

  const [ nextUrl, setNextUrl ]  = useState(' ')
  const [prevUrl, setprevUrl]  = useState(" ")


//  const [pokemonListState, setPokemonListState]  = useState({
//   pokemonList:[],
//   isLoading:true,
//   pokedeskUrl: 'https://pokeapi.co/api/v2/pokemon',
//   nextUrl:'',
//   prevUrl:''

//  });


   async function downloadPokemons(){

       setIsLoading(true);
    

    const response = await axios.get(pokedeskUrl); // this  download lists of 20 pokemons
   

    
// iterating over the array of pokemons , and using their url, to create an array of promises
      // thata wiil download those 20 pokemons 

     const pokemonResults = response.data.results; // we get the array of pokemins from result 
      console.log(pokemonResults)
     const pokemonResultPromise =    pokemonResults.map((pokemon) => axios.get(pokemon.url));
      // console.log(pokemonResultPromise)
     const pokemonData  = await axios.all(pokemonResultPromise);
     console.log(pokemonData)
      console.log(response.data);

 setNextUrl(response.data.next);
 setprevUrl(response.data.previous)

     const res  = pokemonData.map((pokeData) =>{
            const pokemon = pokeData.data;
             return {
               id: pokemon.id,
              name: pokemon.name,  
            image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default: pokemon.sprites,
             types:pokemon.types
            }
      });

     setIsLoading(false);
     setpokemonList(res);
     console.log(res)

   }



  useEffect(()=>{
    downloadPokemons();
  }, [pokedeskUrl])



 return(
 <>
 <div className="pokemonList-wrapper">
   

  <div className="pokemon-wrapper">
    
     {(isLoading) ?   ' loading.......':
  pokemonList.map((p)=><Pokemon name = {p.name} image= {p.image} key={p.id}  id={p.id} />)}
  
     </div>

     <div className="controls"> 
  <button disabled={prevUrl==null} onClick={()=>setPokedeskUrl(prevUrl)}>Prev</button>
  <button disabled= {nextUrl ==null} onClick={()=>setPokedeskUrl(nextUrl)}>Next</button>
   </div>

      </div>

 </>
 )


 }

  export default PokemonList;