import { useState,useRef, useEffect } from "react"
import CardHiraganaGame from "./CardHiraganaGame"
import CardHiraganaGameC from "./CardHiraganaGameC"

function GameC({
  hiraganas,arrayOfNumbers, 
  handleID, setMin, setMax,
  min, max, outterFunction
}) {

  console.log(arrayOfNumbers[0])

  const [points,setPoints] = useState(0)
  const [currentStreak, setStreak] = useState(0)
  const [miss, setMisses] = useState(0)
  const [textinput, setText] = useState("")

  // State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentHiragana, setCurrentHiragana] = useState(hiraganas[arrayOfNumbers[0]]);

  useEffect(()=> init(),[])

  let copyOfHiraganas = [...hiraganas]

  function init(){
    copyOfHiraganas = [...hiraganas]
  }

  const newCardsFunction = () => {
    console.log("fired")
    if(currentStreak > 8){
      setMin(dogs => dogs + 10)
      setMax(cats => cats + 10)
    }
  }

  const gameFunction = () => { 
    if(currentHiragana.soundAlpha === textinput){
      setPoints(dogs => dogs + 1)
      setStreak(cats => cats + 1)
    }else{
      console.log("incorrect")
      setMisses(dogs => dogs + 1)
    }
    setCurrentIndex(dogs => dogs + 1)

    if(arrayOfNumbers.length - 1 < currentIndex){
      newCardsFunction()
      handleID()
      setCurrentIndex(0)
      setCurrentHiragana(copyOfHiraganas[currentIndex])
    }else{
      setCurrentHiragana(copyOfHiraganas[currentIndex])
    }
  }

  const mapOfOptions = () =>{
    console.log(copyOfHiraganas)
    console.log(arrayOfNumbers)
    let temp = (copyOfHiraganas.filter(hira=>arrayOfNumbers.includes(hira.id)))
    return temp.map(hira=><CardHiraganaGameC key = {`${hira.category}${hira.id}`} outterFunction = {outterFunction} currentHiragana = {currentHiragana} hiragana = {hira}/>)
  }





  return (
   <>

  <div>
    {arrayOfNumbers}
  </div>
  
  <div>
  current index: {currentIndex}
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
  current Min: {min}
  </div>

  <div>
  current Max: {max}
  </div>

  <div>
  current Streak: {currentStreak}
  </div>



  <div>
    {currentHiragana?
    <CardHiraganaGame hiragana = {currentHiragana}/>:
    null}
  </div>

  <div>
    {currentHiragana?
    mapOfOptions():null}
  </div>
   </>
  );
}

export default GameC;




// const gameFunction = () => { 
//   if(currentHiragana.current.soundAlpha === textinput){
//     console.log(true)
//     setPoints(dogs => dogs + 1)
//   }else{
//     console.log("incorrect")
//     setMisses(dogs => dogs + 1)
//   }
//   currentIndexRef.current =  currentIndexRef.current += 1;
//   if(arrayOfNumbers.length - 1 < currentIndexRef.current){
//     console.log('fired')
//     currentIndexRef.current = 0;
//     currentHiragana.current = copyOfHiraganas[currentIndexRef.current]
//   }else{
//     currentHiragana.current = copyOfHiraganas[currentIndexRef.current]
//   }
// }