import './Pokemon.css'
function Pokemon({name,image}){
    return(
        <div className='Pokemon'>
            <div className='pokemon-name'>{name}</div>
            <div >
                <img className='Pokemon-img' src={image}/>
                </div>
        </div>
    )
}
export default Pokemon;