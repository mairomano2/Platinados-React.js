import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ComoJugar } from "./components/ComoJugar/ComoJugar"
import { Landing } from "./components/Landing/Landing"
import { Footer } from "./components/Footer/Footer"
import { ItemList } from "./components/ItemDetailcontainer/ItemDetailContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { MisionesContextProvider } from "./components/Context/MisionesContext" 
import Misiones from './components/Misiones';
import { MisionesCompletadas } from "./components/MisionesCompletadas/MisionesCompletadas"

function App() {
  return (
    <div className="App">
      <MisionesContextProvider>
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
              <MisionesCompletadas />
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
      </MisionesContextProvider>
    </div>
  );
};

// TODO
//borrar los css que no sean con url
//agregar mas misiones
//poner imagenes
//agregar emojis
//cambiar el alert por un modal

export default App;