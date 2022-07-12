import { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import DealCard from './DealCard';
import SearchSort from './SearchSort';

function DealList({ currentUser }) {
  const [dealList, setDealList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/deals')
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoading(false);
        setDealList(data);
      });
  }, [currentUser]);

  let filteredDeals = dealList.filter((deal) =>
    deal.title.toLowerCase().includes(search.toLowerCase())
  );

  let renderDeals = filteredDeals.map((deal) => {
    return <DealCard currentUser={currentUser} key={deal.id} deal={deal} />;
  });

  // let renderDeals = filteredDeals.map((deal) => {
  //   if (deal.athlete_id) {
  //     return null;
  //   } else {
  //     return <DealCard currentUser={currentUser} key={deal.id} deal={deal} />;
  //   }
  // });

  return (
    <>
      <br />
      <SearchSort setSearch={setSearch} />
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

export default DealList;
