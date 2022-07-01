import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CollaboratorCard({ currentUser, collaborator }) {
  const { name, address, city, state, remote } = collaborator;

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
          {name}
        </Typography>
        {remote ? (
          <Typography gutterBottom variant="h10" component="div">
            Remote
          </Typography>
        ) : (
          <Typography gutterBottom variant="h10" component="div">
            {`${address} ${city},${state}`}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small">Contact</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}

export default CollaboratorCard;
