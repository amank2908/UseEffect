import { useEffect, useState} from "react";
import axios from 'axios';
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";
function PokemonList(){

    const [PokemonList,setPokemonList]=useState([]);
    const[isLoading,setIsLoading]=useState(true);
    const POKEDEX_URL='https://pokeapi.co/api/v2/pokemon';
    
   async function downloadPokemons(){
        const response= await axios.get(POKEDEX_URL);
        const pokemonResults=response.data.results;
        const pokemonResultPromise=pokemonResults.map((pokemon)=>axios.get(pokemon.url));
        const PokemonData=await axios.all(pokemonResultPromise);
        console.log(PokemonData);
        // console.log(response.data);
       const res= PokemonData.map((pokeData)=>{
        const pokemon=pokeData.data;
        return{
            id:pokemon.id,
            name:pokemon.name,
            image:(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.other ,
            types:pokemon.types

        }
       }
    
    )
         console.log(res)
        setPokemonList(res);
        setIsLoading(false);
    }

    useEffect(()=>{
       downloadPokemons();
    },[]);

    return(
    <>
    <div className="pokemon-list-wrapper">
       <div>Pokemon List</div> 
       <div className="pokemon-wrapper">
       {(isLoading)? 'Loading...':
            PokemonList.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id}/>)
        }

       </div>
       <div className="controls">
            <button>Prev</button>
            <button>Next</button>
       </div>
        
    </div>
    </>
    )

}
export default PokemonList;