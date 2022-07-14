import { useState, useEffect } from 'react';
import { Card, Button, Row, Spinner, Container } from 'react-bootstrap';

function Applications({ currentUser }) {
  const [dealsList, setDealsList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/collaborators/${currentUser.id}/deals`)
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoading(false);
        setDealsList(data);
      });
  }, [currentUser]);

  // function acceptApplication(id) {
  //   let accepted = { athlete_id: id, completed: true };
  //   fetch(`/deals/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'content-type': 'deal/json',
  //     },
  //     body: JSON.stringify(accepted),
  //   })
  //     .then((resp) => resp.json())
  //     .then(update array);
  // }

  //   function denyRequest(id) {
  //     let denied = { athlete_id: null, completed: true };
  //     fetch(`/deals/${id}`, {
  //       method: 'PATCH',
  //       headers: {
  //         'content-type': 'deal/json',
  //       },
  //       body: JSON.stringify(denied),
  //     })
  //       .then((resp) => resp.json())
  //       .then(update array);
  //   }

  let renderApplicants = (deal) =>
    deal.applications.map((application) => {
      return (
        <Card className="deal-card">
          <Card.Header>
            {application.athlete.first_name +
              ' ' +
              application.athlete.last_name}
          </Card.Header>
          <Card.Body>
            <Card.Title>{application.athlete.school}</Card.Title>
            <Card.Text>
              {} | {} | {}
            </Card.Text>
            <Button
              size="small"
              variant="success"
              className="accept"
              // onClick={() => acceptApplication(application.athlete.id)}
            >
              Accept
            </Button>
            <Button
              size="small"
              variant="danger"
              // onClick={() => denyRequest(deal.id)}
            >
              Deny
            </Button>
          </Card.Body>
        </Card>
      );
    });
  let renderDeals = dealsList.map((deal) => {
    return !deal.completed ? (
      <Card className="deal-card">
        <Card.Header>{deal.title}</Card.Header>
        <Card.Body>
          <Card.Title>{deal.description}</Card.Title>
          <Card.Text>Expires: {deal.expiration_date}</Card.Text>
          <Card.Text className="green">Offer: ${deal.offer}</Card.Text>
          <Card.Title>Applicants:</Card.Title>
          {renderApplicants(deal)}
        </Card.Body>
      </Card>
    ) : null;
  });

  return (
    <>
      <h1 className="page-header">applications</h1>
      <br />
      <Container>
        {isLoading ? (
          <Spinner animation="border" />
        ) : (
          <Row className="g-4">{renderDeals}</Row>
        )}
      </Container>
    </>
  );
}

export default Applications;
