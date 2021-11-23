import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ItemList } from "./components/ItemDetailcontainer/ItemDetailContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { Cart } from "./components/Cart/Cart"
import Misiones from './components/Misiones';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Misiones />
          </Route>
          <Route exact path="/cart">
            <Cart />
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