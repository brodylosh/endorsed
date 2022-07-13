import * as React from 'react';
import { useState } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Col,
  Button,
  Card,
  Modal,
  Container,
  Row,
  Image,
} from 'react-bootstrap';

function CollaboratorCard({ collaborator }) {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const {
    name,
    image_url,
    address,
    remote,
    email,
    phone_number,
    deals,
    athletes,
  } = collaborator;

  let renderAthletes = deals.map((deal) => {
    let athlete = athletes.find((athlete) => athlete.id == deal.athlete_id);
    return (
      <li className="li">{athlete.first_name + ' ' + athlete.last_name}</li>
    );
  });

  let renderDeals = deals.map((deal) => {
    let athlete = athletes.find((athlete) => athlete.id == deal.athlete_id);
    return (
      <>
        <Card className="deal-card">
          <Card.Header>{deal.title}</Card.Header>
          <Card.Body>
            <Card.Title>{deal.description}</Card.Title>
            <Card.Text>{athlete.name}</Card.Text>
            <Card.Img
              src={
                athlete.image_url
                  ? athlete.image_url
                  : 'https://www.zimplaza.co.zw/wp-content/uploads/placeholdercompany5f3438282f524800f1d49cd2921bb0a56101e1aa16097ebd313b64778fc7c4bd1611448792.png'
              }
              className="deal-card-image"
            ></Card.Img>
          </Card.Body>
        </Card>
        <br />
      </>
    );
  });

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
        <CardActions className="card-buttons">
          <Button size="small" variant="success" onClick={() => setShow(true)}>
            Contact
          </Button>
          <Button
            size="small"
            variant="outline-success"
            onClick={() => setShow2(true)}
          >
            View
          </Button>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="contact"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="contact-info">
              <p>
                <b>Email: </b> <a href="mailto:email">{email}</a>
              </p>
              <p>
                <b>Phone Number: </b>
                <a href="tel:+123456789">{phone_number}</a>
              </p>
            </Modal.Body>
          </Modal>
          <Modal
            show={show2}
            onHide={() => setShow2(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
              <Image className="modal-image" src={image_url} />
              <Container className="modal-info">
                <Row>
                  <Col>
                    {remote ? <h3>Remote Business</h3> : <h3>{address}</h3>}
                    <br />
                  </Col>
                </Row>
                <Row>
                  <h5>Athletes: </h5>
                  <br />
                  <ul>{renderAthletes}</ul>
                </Row>
              </Container>
            </Modal.Body>
            <Container>
              <br />
              <hr className="solid"></hr>
              <br />
              <h1>Deals:</h1>
              {renderDeals}
            </Container>
          </Modal>
        </CardActions>
      </Card>
    </Col>
  );
}

export default CollaboratorCard;
