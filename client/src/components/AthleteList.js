import { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import AthleteCard from './AthleteCard';
import SearchSort from './SearchSort';

function AthleteList({ currentUser }) {
  const [athleteList, setAthleteList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    fetch('/athletes')
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoading(false);
        setAthleteList(data);
      });
  }, [currentUser]);

  let filteredAthletes = athleteList.filter(
    (athlete) =>
      athlete.first_name.toLowerCase().includes(search.toLowerCase()) ||
      athlete.last_name.toLowerCase().includes(search.toLowerCase())
  );

  let renderAthletes = filteredAthletes.map((athlete) => {
    return (
      <AthleteCard
        className="cards"
        currentUser={currentUser}
        key={athlete.id}
        athlete={athlete}
      />
    );
  });

  return (
    <>
      <br />
      <SearchSort setSearch={setSearch} setSort={setSort} />
      <br />
      <br />
      <Container>
        {isLoading ? (
          <Spinner animation="border" />
        ) : (
          <Row className="g-4">{renderAthletes}</Row>
        )}
      </Container>
    </>
  );
}

export default AthleteList;
