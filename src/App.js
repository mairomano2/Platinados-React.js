import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useContext } from "react"
import { MisionesContext } from "./components/Context/MisionesContext"
import { ItemList } from "./components/ItemDetailcontainer/ItemDetailContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { MisionesContextProvider } from "./components/Context/MisionesContext" 
import Misiones from './components/Misiones';

function App() {
  
  const value = useContext(MisionesContext)

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Misiones />
          </Route>
          <Route exact path="/misionesCompletadas">
            <MisionesContextProvider />
          </Route>
          <Route exact path="/:categoriaID">
            <Misiones />
          </Route>
          <Route exact path="/detalle/:misionID">
            <ItemList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

//para el desafio de la clase 11 si el carrito esta en 0 hacer que no se vea ningun numero

export default App;