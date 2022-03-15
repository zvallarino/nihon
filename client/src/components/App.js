import { useState, useEffect } from "react";
import CardPage from "./CardPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TitlePage from "./TitlePage";


function App() {
  const axios = require('axios').default;

  const [hiragana, setHiragana] = useState(null);

  useEffect(() => {
    fetch("/hiragana")
      .then((r) => r.json())
      .then((data) => setHiragana(data));
  }, []);
  

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route path="/">
           <CardPage />
          </Route>

          <Route path="/MainMenu">
           <CardPage hiragana = {hiragana} />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;