import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadUser } from "./actions/auth";

import Alerts from "./components/Alerts";
import Login from "./pages/Login";
import Register from "./pages/Register";
// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  useEffect(() => store.dispatch(loadUser()), []);
  return (
    <Provider store={store}>
      <div className="App">
        <Alerts />
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
