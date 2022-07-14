import { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

function DealCard({ currentUser, deal }) {
  const [show, setShow] = useState(false);

  let applied = deal.applications.some(
    (application) => application.athlete_id == currentUser.id
  );
  const [isApplied, setIsApplied] = useState(applied);

  const {
    id,
    title,
    offer,
    description,
    school,
    sport,
    year,
    age,
    gender,
    expiration_date,
    location,
    collaborator,
  } = deal;

  function submitApplication() {
    const application = {
      athlete_id: currentUser.id,
      deal_id: id,
    };
    fetch('/applications', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(application),
    });
    setIsApplied(true);
  }

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
          className="deal-card-image"
        ></Card.Img>
        <Button
          size="small"
          variant="outline-success"
          className="view"
          onClick={() => setShow(true)}
        >
          View
        </Button>
        {currentUser &&
          currentUser.athlete &&
          (isApplied ? (
            <>
              <br />
              <br />
              <Card.Title>APPLIED ✅</Card.Title>
            </>
          ) : (
            <Button size="small" variant="success" onClick={submitApplication}>
              Apply
            </Button>
          ))}
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
          <Modal.Body className="modal-content">
            <p>{description}</p>
            <p className="green">Offer: ${offer}</p>
            <p>Location: {location}</p>
            <p>Expires: {expiration_date}</p>
            <br />
            {school || sport || year || age || gender ? (
              <h5>Athlete Criteria:</h5>
            ) : null}
            {school ? <p>School: {school}</p> : null}
            {sport ? <p>Sport: {sport}</p> : null}
            {year ? <p>Year: {year}</p> : null}
            {age ? <p>Age: {age}</p> : null}
            {gender ? <p>Gender: {gender}</p> : null}
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
}

export default DealCard;
