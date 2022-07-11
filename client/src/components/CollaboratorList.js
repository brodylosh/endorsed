import { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import CollaboratorCard from './CollaboratorCard';
import SearchSort from './SearchSort';

function CollaboratorList({ currentUser }) {
  const [collaboratorList, setCollaboratorList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/collaborators')
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoading(false);
        setCollaboratorList(data);
      });
  }, [currentUser]);

  let filteredCollaborators = collaboratorList.filter((collaborator) =>
    collaborator.name.toLowerCase().includes(search.toLowerCase())
  );

  let renderCollaborators = filteredCollaborators.map((collaborator) => {
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
      <SearchSort setSearch={setSearch} />
      <br />
      <Container>
        {isLoading ? (
          <Spinner animation="border" />
        ) : (
          <Row className="g-4">{renderCollaborators}</Row>
        )}
      </Container>
    </>
  );
}

export default CollaboratorList;
