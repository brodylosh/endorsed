import { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

function DealCard({ currentUser, deal }) {
  const [show, setShow] = useState(false);

  const {
    title,
    offer,
    description,
    criteria,
    sport,
    year,
    age,
    gender,
    expiration_date,
    location,
    completed,
    collaborator,
  } = deal;

  // function getDate() {
  //   let today = new Date();
  //   let Difference_In_Time = expiration_date.getTime() - today.getTime();
  //   let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  //   return Difference_In_Days;
  // }

  return (
    <Card className="deal-card">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title>{description}</Card.Title>
        <Card.Text>{collaborator.name}</Card.Text>
        <Card.Text className="green">Offer: ${offer}</Card.Text>
        <Card.Text>Expires: {expiration_date}</Card.Text>
        <Card.Img
          src={
            collaborator.image_url
              ? collaborator.image_url
              : 'https://www.zimplaza.co.zw/wp-content/uploads/placeholdercompany5f3438282f524800f1d49cd2921bb0a56101e1aa16097ebd313b64778fc7c4bd1611448792.png'
          }
          // src="https://s3-media0.fl.yelpcdn.com/bphoto/Z69ukh7OEL9tB31ztxOQSw/348s.jpg"
          className="deal-card-image"
        ></Card.Img>
        {currentUser && currentUser.athlete ? (
          <Button size="small" variant="success" className="apply">
            Apply
          </Button>
        ) : null}
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
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{description}</p>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
}

export default DealCard;
