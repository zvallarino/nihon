import { useRef,useState } from "react";

function TitlePage({tester}) {

  console.log(tester("see"))
  
  const [colorNumber, setColorNumber] = useState(1);
  const colorRef = useRef(1); 

  const colorArray = ["green","blue","yellow"];

  const handleClick = (e) => {
    setColorNumber(2)
  }
  

  return (
   <>
   <div style={{backgroundColor:colorArray[colorNumber]}}>
     NIHON GOGO
   </div>
   <button onClick={handleClick}>Login</button>
   </>
  );
}

export default TitlePage;