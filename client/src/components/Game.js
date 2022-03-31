import { useState,useRef, useEffect } from "react"
import CardHiraganaGame from "./CardHiraganaGame"

function Game({ hiraganas,arrayOfNumbers, numOfCards }) {


  const [points,setPoints] = useState(0)
  const [miss, setMisses] = useState(0)
  const [textinput, setText] = useState("")
  const currentIndexRef = useRef(0)
  const currentIDRef = useRef(arrayOfNumbers[0])
  const currentHiragana = useRef(hiraganas[arrayOfNumbers[0]])
  const [idState,setIDState] = useState(false)

  useEffect(()=> init(),[idState])

  let copyOfHiraganas = {...hiraganas}

  function init(){
    copyOfHiraganas = {...hiraganas}
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
        currentHiragana.current = hira[property]
        console.log("fired")
        return
      }
    }
  }

  const gameFunction = () => { 
    console.log(currentHiragana.current.soundAlpha)
    if(currentHiragana.current.soundAlpha === textinput){
      console.log(true)
      setPoints(dogs => dogs + 1)
    }else{
      console.log("incorrect")
      setMisses(dogs => dogs + 1)
    }
    currentIndexRef.current =  currentIndexRef.current += 1;
    if(arrayOfNumbers.length - 1 < currentIndexRef.current){
      console.log('fired')
      currentIndexRef.current = 0;
      currentHiragana.current = copyOfHiraganas[currentIndexRef.current]
    }else{
      currentHiragana.current = copyOfHiraganas[currentIndexRef.current]
    }
  }


  return (
   <>
   <div>
     {arrayOfNumbers}
  </div>
  
  <div>
  current index: {currentIndexRef.current}
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
    <CardHiraganaGame hiragana = {currentHiragana.current}/>:null}
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