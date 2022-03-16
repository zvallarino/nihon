import { useEffect } from "react";
import CardHiragana from "./CardHiragana";
function CardPage({hiraganas}) {



  const hiraganaCards = hiraganas.map((hiragana)=><CardHiragana hiragana = {hiragana}/>)

  return (
   <>
    {hiraganaCards}
   </>
  );
}

export default CardPage;