import { useEffect, useState } from "react";
import CheckboxHira from "./CheckBoxHira";
import CardHiragana from "./CardHiragana";
import { cardClasses } from "@mui/material";
function CardPage({hiraganas, allSoundCats}) {
  const [currentlyChecked, setCurrentlyChecked] = useState(null)

const soundCheckBoxes = allSoundCats.map(
  (sound,index)=><CheckboxHira
  key = {`${sound}${index}`}
  setCurrentlyChecked = {setCurrentlyChecked} 
  currentlyChecked = {currentlyChecked}
  sound = {sound} 
  index = {index}/>
  )

const fitlercards = (stateCopy) => {
  if(currentlyChecked){
    let keys = Object.keys(currentlyChecked);
    let filtered = keys.filter((key) => currentlyChecked[key]);

    if(filtered.length === 0){
      stateCopy = [...hiraganas];
      setCurrentlyChecked(null)
      return stateCopy;
    }
    let filteredHiragana = []
    for(const property in hiraganas){
      if(filtered.includes(hiraganas[property].categoryHorz)){
        filteredHiragana.push(hiraganas[property])
      }
    }
    stateCopy = [...filteredHiragana];
    return stateCopy;
}else{
  stateCopy = [...hiraganas]
  return stateCopy;
}
}

function MappingFunction(){
 let stateCopy = [...hiraganas];
 return fitlercards(stateCopy).map((hiragana,index)=><CardHiragana
 key = {`${hiragana.soundAlpha}${index}`}
 index = {index} hiragana = {hiragana}/>)
}


  return (
  <>
    {soundCheckBoxes}
    {MappingFunction()}
  </>
  );
}



export default CardPage;