import { useEffect, useState } from "react";
import CheckboxHira from "./CheckBoxHira";
import CardHiragana from "./CardHiragana";
function CardPage({hiraganas, allSoundCats}) {
  const [currentlyChecked, setCurrentlyChecked] = useState(null)

  const soundCheckBoxes = allSoundCats.map((sound,index)=><CheckboxHira
   setCurrentlyChecked = {setCurrentlyChecked} 
   currentlyChecked = {currentlyChecked}
   sound = {sound} 
   index = {index}/>)



  const hiraganaCards = hiraganas.map((hiragana,index)=><CardHiragana key = {hiragana.character} index = {index} hiragana = {hiragana}/>)

  return (
   <>
    {soundCheckBoxes}
    {hiraganaCards}
   </>
  );
}



export default CardPage;