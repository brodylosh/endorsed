import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Modal } from 'react-bootstrap';

function CollaboratorCard({ currentUser, collaborator }) {
  const [show, setShow] = useState(false);

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
              {name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>lorem ipsom</p>
          </Modal.Body>
        </Modal>
      </CardActions>
    </Card>
  );
}

export default CollaboratorCard;
