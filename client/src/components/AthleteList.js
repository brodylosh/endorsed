import { Container, Row } from 'react-bootstrap';
import AthleteCard from './AthleteCard';

function AthleteList({ currentUser, athleteList }) {
  let renderAthletes = athleteList.map((athlete) => {
    return (
      <AthleteCard
        currentUser={currentUser}
        key={athlete.id}
        athlete={athlete}
      />
    );
  });

  return (
    <>
      <br />
      <Container>
        <Row className="g-4">{renderAthletes}</Row>
      </Container>
    </>
  );
}

export default AthleteList;
