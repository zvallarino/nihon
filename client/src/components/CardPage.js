import { useEffect } from "react";
import CardHiragana from "./CardHiragana";
function CardPage({hiraganas}) {



  const hiraganaCards = hiraganas.map((hiragana,index)=><CardHiragana key = {hiragana.character} index = {index} hiragana = {hiragana}/>)

  return (
   <>
    {hiraganaCards}
   </>
  );
}



export default CardPage;