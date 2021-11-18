import {BrowserRouter, Switch, Route} from "react-router-dom"
import {ItemList} from "./components/ItemDetailcontainer/ItemDetailContainer"
import Misiones from './components/Misiones';

import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <h1> soy app</h1>
        <Switch>
          <Route exact path="/">
            <Misiones />
          </Route>
          <Route exact path="/:categoriaID">
            <Misiones />
          </Route>
          <Route exact path="/:misionID">
            <ItemList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

//para el desafio de la clase 11 si el carrito esta en 0 hacer que no se vea ningun numero

export default App;