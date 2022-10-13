import NavBar from '../src/components/NavBar'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Carrito from './components/Carrito';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Routes>
              <Route path='/' element={ <ItemListContainer /> }/>
              <Route path='/seccion/:seccionElegida' element={ <ItemListContainer /> }/>
              <Route path='/item/:id' element={ <ItemDetailContainer /> }/>  
              <Route path='/carrito' element={<Carrito />}/>            
          </Routes>
          
          <Footer />
        </header>

      </div>
    </BrowserRouter>
    
  );
}

export default App;
