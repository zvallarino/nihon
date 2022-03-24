import { useState,useEffect } from "react"
import CardHiraganaGame from "./CardHiraganaGame"

function Game({ hiraganas }) {


  const [points,setPoints] = useState(0)
  const [miss, setMisses] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10)
  const [textinput, setText] = useState("")
  const [arrayOfNumbers, setNumbers] = useState(null)
  const [numOfCards, setNumberOfCards] = useState(10)
  const [currentHiragana, setCurrentHiragana] = useState(null)




  useEffect(()=> init(),[])

  function init(){
    let copyOfHiraganas = {...hiraganas}
    handleID();
    loopToFindHiragana(1,copyOfHiraganas);
    console.log("fired")
  }




  function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const cards = () => [...Array(numOfCards)].map((_, i) => randomIntFromInterval(min,max))

  const handleID = () =>{
    setNumbers(cards())
  }

  const handleChange = (e) =>  {
    setText(e.target.value)
 
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(textinput === arrayOfNumbers)
  }

  const loopToFindHiragana = (cardNumber,hira) => {
    console.log(hira)
    console.log(cardNumber)

    for(let property in hira){
      console.log(property)
      console.log(hira[property])
      if(hira[property].id === cardNumber){
        setCurrentHiragana(hira[property])
        return
      }
    }
  }


  const gameFunction = (hiragana) => { 
    return
  }


  return (
   <>
   <div>
     {arrayOfNumbers}
  </div>
  <div>
    {currentHiragana?<CardHiraganaGame hiragana = {currentHiragana}/>:null}
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