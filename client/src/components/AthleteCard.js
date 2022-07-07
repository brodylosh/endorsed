import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Modal } from 'react-bootstrap';

function AthleteCard({ currentUser, athlete }) {
  const [show, setShow] = useState(false);

  const {
    first_name,
    last_name,
    birthday,
    university,
    sport,
    year,
    bio,
    image,
  } = athlete;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <br />
      <CardMedia component="img" height="140" src={image} alt="User Avatar" />
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
        <Button size="small" variant="success">
          Contact
        </Button>
        <Button
          size="small"
          variant="outline-success"
          onClick={() => setShow(true)}
        >
          View
        </Button>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {first_name + ' ' + last_name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{bio}</p>
          </Modal.Body>
        </Modal>
      </CardActions>
    </Card>
  );
}

export default AthleteCard;
