import { Container, Row } from 'react-bootstrap';
import DealCard from './DealCard';

function DealList({ currentUser, dealList }) {
  let renderDeals = dealList.map((deal) => {
    return <DealCard currentUser={currentUser} key={deal.id} deal={deal} />;
  });

  return (
    <>
      <br />
      <Container>
        <Row className="g-4">{renderDeals}</Row>
      </Container>
    </>
  );
}

export default DealList;
