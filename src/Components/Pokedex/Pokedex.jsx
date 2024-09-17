import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedex.Css';
function Pokedex(){
    return (
        <div className='pokedex-wrapper'>
       <h1 id='Pokedex-heading'>Pokedex</h1> 
        <Search/>
        <PokemonList/>
        </div>
    )
}
export default Pokedex