import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ComoJugar } from "./components/ComoJugar/ComoJugar"
import { Landing } from "./components/Landing/Landing"
import { Footer } from "./components/Footer/Footer"
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
            <Route exact path="/Platinados-React.js">
              <Landing />
            </Route>
            <Route exact path="/Platinados-React.js/misiones">
              <Misiones />
            </Route>
            <Route exact path="/Platinados-React.js/comoJugar">
              <ComoJugar />
            </Route>
            <Route exact path="/Platinados-React.js/misionesCompletadas">
              <MisionesCompletadas />
            </Route>
            <Route exact path="/Platinados-React.js/categoria/:categoriaID">
              <Misiones />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </MisionesContextProvider>
    </div>
  );
};

export default App;