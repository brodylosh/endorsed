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
  } = deal;

  return (
    <Card className="deal-card">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title>{description}</Card.Title>
        <Card.Text>Offer: ${offer}</Card.Text>
        <Card.Text>Expires: {expiration_date}</Card.Text>
        {currentUser && currentUser.athlete ? (
          <Button size="small" variant="success">
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
