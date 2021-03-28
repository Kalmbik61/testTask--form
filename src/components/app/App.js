import "./app.scss";
import { Card } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";

import Form from "../form/Form";
import Checkout from "../checkout/Checkout";
import Thx from "../thx/Thx";
function App() {
  return (
    <div className="app">
      <Router>
        <Card className="card">
          <Switch>
            <HashRouter basename="/" exact component={Form} />
            <HashRouter basename="/checkout" component={Checkout} />
            <HashRouter basename="/thx" component={Thx} />
          </Switch>
        </Card>
      </Router>
    </div>
  );
}

export default App;
