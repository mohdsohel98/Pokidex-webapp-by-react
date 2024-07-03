// import Pokidex from "./components/Pokidex/Pokidex";
// import Search from "./components/Search/Search";
import { Link } from 'react-router-dom';
import './App.css'
import CustomRoutes from "./routes/CustomRoutes";
function App() {
 

  return (
  
 <>
  <div className='outer-pokidex'>
  <h1 className="poki-heading">
    <Link to='/'>Pokidesk</Link>
  </h1>
<CustomRoutes/>
  </div>
 </>
    
  )
}

export default App;
