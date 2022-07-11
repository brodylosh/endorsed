import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Col, Button, Modal } from 'react-bootstrap';

function CollaboratorCard({ currentUser, collaborator }) {
  const [show, setShow] = useState(false);

  const { name, image_url, address, remote } = collaborator;

  return (
    <Col xs={12} s={8} md={6} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <br />
        <CardMedia
          component="img"
          height="140"
          src={
            image_url
              ? image_url
              : 'https://www.zimplaza.co.zw/wp-content/uploads/placeholdercompany5f3438282f524800f1d49cd2921bb0a56101e1aa16097ebd313b64778fc7c4bd1611448792.png'
          }
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
              {`${address}`}
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
    </Col>
  );
}

export default CollaboratorCard;
