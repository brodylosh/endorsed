import { Container, Row } from 'react-bootstrap';
import AthleteCard from './AthleteCard';

function AthleteList({ currentUser, athleteList }) {
  let renderAthletes = athleteList.map((athlete) => {
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
    <div className="list">
      <br />
      <Container>
        <Row>{renderAthletes}</Row>
      </Container>
    </div>
  );
}

export default AthleteList;
