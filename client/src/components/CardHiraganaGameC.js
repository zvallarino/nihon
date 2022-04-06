import { useRef,useState } from "react";

function CardHiraganaGameC({hiragana, currentHiragana, outterFunction}) {

  const [color, setColor ] = useState("blue")


  function handleClick(){
    console.log(currentHiragana.id)
    if(hiragana.id === currentHiragana.id){
      setColor("green")
    }else{
      setColor("red")
    }
  }


  

  return (
   <>
   <div style={{backgroundColor:color}} onClick = {handleClick}>
     <h1>Character</h1>
     <h1>{hiragana.character}</h1>
     NIHON GOGO
   </div>
   </>
  );
}

export default CardHiraganaGameC;