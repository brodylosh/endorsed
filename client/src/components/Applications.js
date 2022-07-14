import { useState, useEffect } from 'react';
import { Card, Button, Row, Spinner } from 'react-bootstrap';

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

  //   let renderApplicants =

  //   function acceptRequest(id) {
  //     let accepted = { completed: true };
  //     fetch(`/deals/${id}`, {
  //       method: 'PATCH',
  //       headers: {
  //         'content-type': 'deal/json',
  //       },
  //       body: JSON.stringify(accepted),
  //     })
  //       .then((resp) => resp.json())
  //       .then(console.log);
  //   }

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
  //       .then(console.log);
  //   }

  let renderDeals = dealsList.map((deal) =>
    !deal.completed ? (
      <Card className="deal-card">
        <Card.Header>{deal.title}</Card.Header>
        <Card.Body>
          <Card.Title>{deal.description}</Card.Title>
          <Card.Text>Expires: {deal.expiration_date}</Card.Text>
          <Card.Text className="green">Offer: ${deal.offer}</Card.Text>
          <Card.Title>Applicants:</Card.Title>
          {/* {renderApplicants} */}
        </Card.Body>
      </Card>
    ) : null
  );

  return (
    <>
      <h1>Deals</h1>
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <Row className="g-4">{renderDeals}</Row>
      )}
    </>
  );
}

export default Applications;
