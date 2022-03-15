import { useEffect } from "react";
import Card from "./Card";

function CardPage({hiraganas}) {

  const hiraganaCards = hiraganas.map((hiragana)=><Card hiragana = {hiragana}/>)

  return (
   <>
    {hiraganaCards}
   </>
  );
}

export default CardPage;