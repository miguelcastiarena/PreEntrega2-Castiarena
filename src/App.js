import NavBar from '../src/components/NavBar'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer />
        <ItemDetailContainer />
 
      </header>
    </div>
  );
}

export default App;
