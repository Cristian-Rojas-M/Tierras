import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryList from "./pages/CountryList";
import CountryDetail from "./pages/CountryDetail";
import Prueba from "./pages/Prueba";

export default function Home() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Prueba} />
        {/* <Route path="/country-detail/:countryId" component={CountryDetail} /> */}
      </Switch>
    </Router>
  );
}
