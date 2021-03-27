import "./app.scss";
import { Card } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Form from "../form/Form";
import Checkout from "../checkout/Checkout";
import Thx from "../thx/Thx";
function App() {
  return (
    <div className="app">
      <Router>
        <Card className="card">
          <Route path="/" exact component={Form} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/thx" component={Thx} />
        </Card>
      </Router>
    </div>
  );
}

export default App;
