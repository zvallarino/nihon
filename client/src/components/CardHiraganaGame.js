import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (hiragana)=>{
  return(
  <React.Fragment>
    <CardContent>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {"Character"}
        </Typography>

        <Typography variant="h5" component="div">
          {hiragana.character}
        </Typography>

        {/* <Typography variant="h4" component="div">
        {index+1}
        </Typography> */}

    </CardContent>
  </React.Fragment>
  )
}

export default function CardHiraganaGame({hiragana}) {

  const [flipCard,setFlipCard] = useState(false)

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card(hiragana)}</Card>
    </Box>
  );
}