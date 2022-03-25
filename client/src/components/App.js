import { useState, useEffect } from "react";
import CardPage from "./CardPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TitlePage from "./TitlePage";
import Game from "./Game";


function App() {
  const axios = require('axios').default;

  const [hiraganas, setHiragana] = useState(null);
  const [allSoundCats,setAllSoundCats] = useState(null);
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10)
  const [arrayOfNumbers, setNumbers] = useState(null)
  const [numOfCards, setNumberOfCards] = useState(10)

  useEffect(()=>init(),[]);

  function init(){
    getSoundCats()
    handleID();
    getHiragana()
  }

  function getHiragana(){
    axios.get('/hiraganas')
    .then(res => setHiragana(res.data))
    .catch(error => console.error(error));
  }

  
  function getSoundCats(){
    axios.get('/soundcategories')
    .then(res => setAllSoundCats(res.data))
    .catch(error => console.error(error));
  }

  const cards = () => [...Array(numOfCards)].map((_, i) => randomIntFromInterval(min,max));

  function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

  const handleID = () =>{
    setNumbers(cards())
  }




  

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route path="/main">
           {hiraganas?<CardPage hiraganas ={hiraganas} allSoundCats = {allSoundCats}/>:null}
          </Route>

          <Route path="/MainMenu">
          </Route>

          <Route path="/game">
            {hiraganas?
            <Game
              hiraganas ={hiraganas}
              allSoundCats = {allSoundCats}
              arrayOfNumbers ={arrayOfNumbers}
              numOfCards = {numOfCards}
            />:null}
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;