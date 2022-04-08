import { useState, useEffect } from "react";
import CardPage from "./CardPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TitlePage from "./TitlePage";
import Game from "./Game";
import GameC from "./AzGameC";


function App() {
  const axios = require('axios').default;

  const [hiraganas, setHiragana] = useState(null);
  const [allSoundCats,setAllSoundCats] = useState(null);
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10)
  const [arrayOfNumbers, setNumbers] = useState(null)
  const [numOfCards, setNumberOfCards] = useState(10)

  //

  const [minC, setMinC] = useState(1)
  const [maxC, setMaxC] = useState(11)
  const [arrayOfNumbersC, setNumbersC] = useState(null)
  const [numOfCardsC, setNumberOfCardsC] = useState(4)

  useEffect(()=>init(),[]);

  function init(){
    getSoundCats();
    handleID();
    getHiragana();
    outterFunction();
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
  const chars = () => [...Array(numOfCardsC)].map((_, i) => randomIntFromInterval(minC,maxC));

  const randomIntFromInterval = (x,y) => { 
    return Math.floor(Math.random() * (y - x + 1) + x)
  };

  function handleID(){
    setNumbers(cards())
  }

  function handleIDC(){
    setNumbersC(chars())
  }

  const newRandom = (x,y,arr) => { 
    if(arr.length > numOfCardsC-1){
      return arr
    }
    let temp = Math.floor(Math.random() * (y - x + 1) + x)
    if(arr.includes(temp)){
      return newRandom(x,y,arr)
    }else{
      arr.push(temp)
      return newRandom(x,y,arr)
    }
  }; 

  const outterFunction = () =>{
    const numbers = [];
    setNumbersC(newRandom(minC,maxC,numbers))
    return
  }



  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

        <Route path="/characters">
            {hiraganas?
            <GameC
              hiraganas ={hiraganas}
              allSoundCats = {allSoundCats}
              arrayOfNumbers ={arrayOfNumbersC}
              handleID = {handleIDC}
              setMin = {setMinC}
              setMax = {setMaxC}
              min = {minC}
              max = {maxC}
              outterFunction = {outterFunction}
            />:null}
          </Route>

        <Route path="/game">
            {hiraganas?
            <Game
              hiraganas ={hiraganas}
              allSoundCats = {allSoundCats}
              arrayOfNumbers ={arrayOfNumbers}
              numOfCards = {numOfCards}
              handleID = {handleID}
              setMin = {setMin}
              setMax = {setMax}
           
              max = {max}
              min = {min}
            />:null}
          </Route>

          <Route path="/main">
            {hiraganas?
            <CardPage
            hiraganas ={hiraganas}
            allSoundCats = {allSoundCats}
            arrayOfNumbers = {arrayOfNumbers}
            />:null}
          </Route>

          <Route path="/MainMenu">
            <TitlePage
        
            />
          </Route>

         

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;