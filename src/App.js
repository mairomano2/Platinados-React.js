import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ComoJugar } from "./components/ComoJugar/ComoJugar"
import { Landing } from "./components/Landing/Landing"
import { Footer } from "./Footer/Footer"
import { ItemList } from "./components/ItemDetailcontainer/ItemDetailContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { MisionesContextProvider } from "./components/Context/MisionesContext" 
import Misiones from './components/Misiones';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/misiones">
            <Misiones />
          </Route>
          <Route exact path="/comoJugar">
            <ComoJugar />
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
        <Footer />
      </BrowserRouter>
    </div>
  );
};

// TODO
// hacer que se sume el puntaje total
//mostrar las misiones generales en pantalla
//ver que se guarde en firestore los datos de la mision (solo se crea el array)
//agregar mas misiones
//borrar la cantidad del codigo y firebase
//borrar contador
//hacer que el boton de agregar misiones suba automaticamente a firebase

export default App;