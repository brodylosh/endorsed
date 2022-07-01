import { Container, Row } from 'react-bootstrap';
import CollaboratorCard from './CollaboratorCard';

function CollaboratorList({ currentUser, collaboratorList }) {
  let renderCollaborators = collaboratorList.map((collaborator) => {
    return (
      <CollaboratorCard
        currentUser={currentUser}
        key={collaborator.id}
        collaborator={collaborator}
      />
    );
  });

  return (
    <>
      <br />
      <Container>
        <Row className="g-4">{renderCollaborators}</Row>
      </Container>
    </>
  );
}

export default CollaboratorList;
