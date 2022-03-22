import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useSound from 'use-sound';

const {allSounds} = require('./SoundPage.js');




const card = (hiragana,handleClick,flipCard,play,index)=>{
  return(
  <React.Fragment>
    <CardContent onClick = {handleClick}>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {flipCard?"Character":"English Sound"}
        </Typography>

        <Typography variant="h5" component="div">
        {flipCard?hiragana.character:hiragana.soundAlpha}
        </Typography>

        <Typography variant="h4" component="div">
        {index+1}
        </Typography>

      </CardContent>

    <CardActions onClick = {()=>play({ id: 'firstSound'})}>
      <Button size="small">sound</Button>
    </CardActions>

  </React.Fragment>
  )
}

export default function CardHiragana({hiragana,index}) {


  const [flipCard,setFlipCard] = useState(false)
  const [play] = useSound((allSounds[hiragana.id-1]),{
    sprite:{
      firstSound: [0,500]
    }
  });


  const handleClick = (e) =>{
    setFlipCard(dogs =>!dogs)
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card(hiragana,handleClick,flipCard,play,index,allSounds)}</Card>
    </Box>
  );
}