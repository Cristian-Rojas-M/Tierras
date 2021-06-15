import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ModificarPubli from "./components/Main/ModificarPubli";
import CrearPublicacion from "./components/Main/ModificarPubli/CrearPublicacion";
import PublicacionId from "./components/Main/PublicacionId";

function App() {
  return (
    <>
      <Route path="/" render={() => <Header />} />
      <Route exact path="/" render={() => <Main />} />
      <Route exact path="/publicaciones/:id" component={PublicacionId} />
      <Route exact path="/modificarPubli/:id" component={ModificarPubli} />
      <Route
        exact
        path="/createPublication"
        render={() => <CrearPublicacion />}
      />
    </>
  );
}

export default App;
