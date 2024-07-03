 
  import { Link } from 'react-router-dom';
import './Pokemon.css'
 
 
 function Pokemon({name, image,id}){
   return(
 <div className='pokemon'>

  <Link to={`/Pokemon/${id}`}>

  <div className='pokemon-name'>{name}</div>
   <div><img className='pokemon-image' src={image}></img></div>

   </Link>
 </div>
 
   )

 }

  export default Pokemon;