import './App.css';
import Header from "./components/Header"
import ListCats from './pages/ListCats';

function App() {
  return (
    <div className="App">
      <Header/>
      <ListCats />
    </div>
  );
}

export default App;
