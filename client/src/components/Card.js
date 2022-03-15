function Card({hiragana}) {
 
  return (
   <div className="card">
     {hiragana.character}
     {hiragana.soundAlpha}
   </div>
  );
}

export default Card;