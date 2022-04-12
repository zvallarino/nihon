import { useState,useRef, useEffect } from "react"
import CardHiraganaGame from "./CardHiraganaGame"
import AzzzCardHiraganaGameC from "./AzzzCardHiraganaGameC"

function AzGameC({
  hiraganas,arrayOfNumbers, 
  handleID, setMin, setMax,
  min, max, outterFunction
}) {

  const [points,setPoints] = useState(0)
  const [currentStreak, setStreak] = useState(0)
  const [miss, setMisses] = useState(0)
  const [textinput, setText] = useState("")
  const [hiraganaIndex,setHiraganaIndex] = useState(0)

  // State
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentHiraganaRef = useRef(hiraganas[arrayOfNumbers[hiraganaIndex]-1]);

  useEffect(()=> init(),[])

  let copyOfHiraganas = [...hiraganas]

  function init(){
    copyOfHiraganas = [...hiraganas]
  }

  const setterOfCurrentHiragana = () =>{
    currentHiraganaRef.current = hiraganas[arrayOfNumbers[0]-1]
  }


  const mapOfOptions = () =>{
    let temp = (copyOfHiraganas.filter(hira=>arrayOfNumbers.includes(hira.id)))
    return temp.map(hira=>
    <AzzzCardHiraganaGameC 
    key = {`${hira.category}${hira.id}`} 
    outterFunction = {outterFunction} 
    currentHiragana = {currentHiraganaRef.current} 
    hiragana = {hira}
    mainCard = {false}
    setterOfCurrentHiragana = {setterOfCurrentHiragana}
    />)
  }

  const handleClick = (e) => {
    setHiraganaIndex(dogs => dogs + 1)
    currentHiraganaRef.current = hiraganas[arrayOfNumbers[hiraganaIndex]-1]
    console.log(hiraganaIndex)
  }

  return (
   <>

  <div>
    {arrayOfNumbers}
  </div>
  
  <div onClick = {handleClick}>
  current index: {currentIndex}
  </div>

  <div>
    {currentHiraganaRef?currentHiraganaRef.current.soundAlpha:null}
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
    {currentHiraganaRef.current?
    <AzzzCardHiraganaGameC
    key = {`${currentHiraganaRef.current.category}${currentHiraganaRef.current.id}`}
    hiragana = {currentHiraganaRef.current}
    currentHiragana = {currentHiraganaRef.current}
    mainCard = {true}/>
    :
    null}
  </div>

  <div>
    {currentHiraganaRef.current?
    mapOfOptions():null}
  </div>
   </>
  );
}

export default AzGameC;


// const newCardsFunction = () => {
//   if(currentStreak > 8){
//     setMin(dogs => dogs + 10)
//     setMax(cats => cats + 10)
//   }
// }

// const gameFunction = () => { 
//   if(currentHiragana.soundAlpha === textinput){
//     setPoints(dogs => dogs + 1)
//     setStreak(cats => cats + 1)
//   }else{
//     console.log("incorrect")
//     setMisses(dogs => dogs + 1)
//   }
//   setCurrentIndex(dogs => dogs + 1)

//   if(arrayOfNumbers.length - 1 < currentIndex){
//     newCardsFunction()
//     handleID()
//     setCurrentIndex(0)
//     setCurrentHiragana(copyOfHiraganas[currentIndex])
//   }else{
//     setCurrentHiragana(copyOfHiraganas[currentIndex])
//   }
// }




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