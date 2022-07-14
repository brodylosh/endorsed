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

  function acceptApplication(dealId, athleteId) {
    let accepted = { athlete_id: athleteId, completed: true };
    fetch(`/deals/${dealId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(accepted),
    }).then((resp) => resp.json());
  }

  function denyApplication(applicationId) {
    fetch(`/applications/${applicationId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
  }

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
              {application.athlete.sport} | {application.athlete.year} |{' '}
              {application.athlete.gender}
            </Card.Text>
            <Button
              size="small"
              variant="success"
              className="accept"
              onClick={() => acceptApplication(deal.id, application.athlete.id)}
            >
              Accept
            </Button>
            <Button
              size="small"
              variant="danger"
              onClick={() => denyApplication(application.id)}
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
