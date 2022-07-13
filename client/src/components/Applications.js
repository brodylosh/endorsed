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
          <Card.Text>{deal.collaborator.name}</Card.Text>
          <Card.Text className="green">Offer: ${deal.offer}</Card.Text>
          <Card.Text>Expires: {deal.expiration_date}</Card.Text>
          <Card.Img
            src={
              deal.collaborator.image_url
                ? deal.collaborator.image_url
                : 'https://www.zimplaza.co.zw/wp-content/uploads/placeholdercompany5f3438282f524800f1d49cd2921bb0a56101e1aa16097ebd313b64778fc7c4bd1611448792.png'
            }
            className="deal-card-image"
          ></Card.Img>
          <Button
            size="small"
            variant="success"
            className="apply"
            // onClick={() => acceptRequest(deal.id)}
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
