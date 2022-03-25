import { useState,useEffect } from "react"
import CardHiraganaGame from "./CardHiraganaGame"

function Game({ hiraganas,arrayOfNumbers, numOfCards }) {


  const [points,setPoints] = useState(0)
  const [miss, setMisses] = useState(0)
  const [textinput, setText] = useState("")
  const [currentIndexOfHiragana,setIndexHiragana] = useState(0)
  const [currentIDofHiragana,setIDofHiragana] = useState(arrayOfNumbers[0])
  const [currentHiragana, setCurrentHiragana] = useState(null)

  useEffect(()=> init(),[])

  let copyOfHiraganas = {...hiraganas}

  function init(){
    copyOfHiraganas = {...hiraganas}
    loopToFindHiragana(copyOfHiraganas);
  }

  const incrementRandom = (numOfCards) => {
    if(currentIndexOfHiragana >= numOfCards){
      setIndexHiragana(0)
      setIDofHiragana(arrayOfNumbers[0])
    } else {
      setIndexHiragana(dogs => dogs +=1)
      setIDofHiragana(arrayOfNumbers[currentIndexOfHiragana])
    }
  }

  const handleChange = (e) =>  {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    gameFunction();
    setText("");
  }

  const loopToFindHiragana = (cardNumber,hira) => {
    for(let property in hira){
      if(hira[property].id === cardNumber){
        setCurrentHiragana(hira[property])
        return
      }
    }
  }

  const gameFunction = () => { 
    console.log(currentHiragana)
    if(currentHiragana.soundAlpha === textinput){
      incrementRandom(numOfCards)
      setPoints(dogs => dogs +=1)
      loopToFindHiragana(copyOfHiraganas)
    }else{
      incrementRandom(numOfCards)
      setMisses(dogs => dogs +=1)
      loopToFindHiragana(copyOfHiraganas)
    }
  }


  return (
   <>
   <div>
  
     {arrayOfNumbers}
  </div>
  <div>
  current index: {currentIndexOfHiragana}
  </div>
  <div>
  current ID: {currentIDofHiragana}
  </div>
  <div>
    {currentHiragana?currentHiragana.soundAlpha:null}
  </div>
  <div>
  Hit Counter: {points}
  </div>

  <div>
  Miss Counter: {miss}
  </div>

  <div>
    {currentHiragana?
    <CardHiraganaGame hiragana = {currentHiragana}/>:null}
  </div>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input type="text" value={textinput} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
   </>
  );
}

export default Game;