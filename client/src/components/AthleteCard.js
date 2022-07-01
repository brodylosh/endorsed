import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function AthleteCard({ currentUser, athlete }) {
  const { first_name, last_name, birthday, university, sport, year } = athlete;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <br />
      <CardMedia
        component="img"
        height="140"
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1651857656900/jS_2jvtVJ.jpg"
        // image="/static/images/cards/contemplative-reptile.jpg"
        alt="User Avatar"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {first_name + ' ' + last_name}
        </Typography>
        <Typography gutterBottom variant="h10" component="div">
          {university}
        </Typography>
        <Typography gutterBottom variant="h10" component="div">
          {sport}
        </Typography>
        <Typography gutterBottom variant="h10" component="div">
          {year}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Contact</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}

export default AthleteCard;
