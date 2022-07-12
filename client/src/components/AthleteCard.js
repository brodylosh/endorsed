import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Col, Button, Modal, Container, Row, Image } from 'react-bootstrap';

function AthleteCard({ athlete }) {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const {
    first_name,
    last_name,
    birthday,
    university,
    sport,
    year,
    bio,
    image_url,
    email,
    phone_number,
    collaborators,
    deals,
  } = athlete;

  function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

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
              : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg'
          }
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
            sz="sm"
            dialogClassName="contact"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {first_name + ' ' + last_name}
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
                {first_name + ' ' + last_name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
              <Image className="modal-image" src={image_url} />
              <Container className="modal-info">
                <Row>
                  <Col>
                    <h1>{university}</h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>
                      {sport} | {year}
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <h5>Age: {getAge(birthday)}</h5>
                  <br />
                  <br />
                </Row>
                <Row>
                  <h5>Biography: </h5>
                  <br />
                  <p>{bio}</p>
                </Row>
                <Row>
                  <h5>Collaborators: </h5>
                  <br />
                  <p>
                    {collaborators.map((collaborator) => collaborator.name)}
                  </p>
                </Row>
              </Container>
            </Modal.Body>
            <Container>
              <br />
              <hr className="solid"></hr>
              <br />
              <h1>Deals:</h1>
              {}
            </Container>
          </Modal>
        </CardActions>
      </Card>
    </Col>
  );
}

export default AthleteCard;
