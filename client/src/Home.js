import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryList from "./pages/CountryList";
import CountryDetail from "./pages/CountryDetail";

export default function Home() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CountryList} />
        <Route path="/country-detail/:id" component={CountryDetail} />
      </Switch>
    </Router>
  );
}
