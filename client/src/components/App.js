import { useState, useEffect } from "react";
import CardPage from "./CardPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TitlePage from "./TitlePage";


function App() {
  const axios = require('axios').default;

  const [hiraganas, setHiragana] = useState(null);

  useEffect(()=>getHiragana(), []);

  function getHiragana(){
    axios.get('/hiraganas')
    .then(res => setHiragana(res.data))
    .catch(error => console.error(error));
  }

  

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route path="/">
           {hiraganas?<CardPage hiraganas ={hiraganas} />:null}
          </Route>

          <Route path="/MainMenu">
    
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;