import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Main/Screens/Home/Home";
import Profile from "./Main/Screens/Profile/Profile";
import PageNotFound from "./Main/Screens/PageNotFound/PageNotFound";
import { Provider } from "react-redux";
import { store } from "./Main/Store/Store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/*" component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
