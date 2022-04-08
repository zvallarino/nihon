import { useRef,useState } from "react";

function AzzzCardHiraganaGameC({hiragana, currentHiragana, outterFunction,mainCard, setterOfCurrentHiragana}) {

  const [color, setColor ] = useState("blue")
  const [isMainCard, setCard] = useState(mainCard)

  const initAction = () => {
    outterFunction()
    setterOfCurrentHiragana()
  }


  function handleClick(e){
    if(!isMainCard)
    {
      if(hiragana.id === currentHiragana.id){
        initAction()
    }else{
      setColor("red")
    }
  }
  }


  

  return (
   <>
   <div style={{backgroundColor:color}} onClick = {handleClick}>
     <h1>{mainCard? "Sound":"Character"}</h1>
     <h1>{mainCard? hiragana.soundAlpha:hiragana.character}</h1>
   </div>
   </>
  );
}

export default AzzzCardHiraganaGameC;