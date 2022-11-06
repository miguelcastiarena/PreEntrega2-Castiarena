import NavBar from './components/NavBar'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Carrito from './components/Carrito';
import Form from './components/Form/Form';
import Provider from './context/CartContext';

function App() {
  return (
    <Provider>
      <BrowserRouter>
            <div className="App">
              <header className="App-header">
                <NavBar />
                <Routes>
                    <Route path='/' element={ <ItemListContainer /> }/>
                    <Route path='/seccion/:seccionElegida' element={ <ItemListContainer /> }/>
                    <Route path='/item/:id' element={ <ItemDetailContainer /> }/>  
                    <Route path='/carrito' element={<Carrito />}/>           
                    <Route path='/form' element={<Form/>}/>
                </Routes>
                
                <Footer />
              </header>

            </div>
      </BrowserRouter>

    </Provider> 
  );
}

export default App;
