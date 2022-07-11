import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home({ currentUser }) {
  return (
    <div className="Home">
      <div className="home-feature-image">
        <img
          src="https://i.ibb.co/k9rHPWM/IMG-2626.jpg"
          alt="Mel Tucker shaking Sparty's hand"
          className="feature-image"
        />
        <div className="feature-image-header">
          <h1>THE WORLD'S LARGEST DIGITAL NIL MARKETPLACE</h1>
          <h4>connecting student-athletes to paid sponsors</h4>
          {currentUser ? (
            <Link to="/deals">
              <Button variant="success">See Active Deals</Button>
            </Link>
          ) : (
            <Link to="/signup">
              <Button component={Link} to="/signup" variant="success">
                Sign Up
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div>
        <h1>Brief Overview</h1>
      </div>
      <Container>
        <Row xs={2} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.gannett-cdn.com/presto/2021/09/26/PLSJ/62f86f5f-0e87-4c83-97f8-c20db15bf445-210925_msu_nebraska_146a.JPG"
                style={{ width: 'auto', height: 300 }}
              />
              <Card.Body>
                <Card.Title>Athletes</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Link to="/athletes">
                  <Button variant="success">View Athletes</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://nypost.com/wp-content/uploads/sites/2/2022/06/cj-stroud-gwagon-nil-deal-01.jpg"
                style={{ width: 'auto', height: 300 }}
              />
              <Card.Body>
                <Card.Title>Deals</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Link to="/deals">
                  <Button variant="success">View Deals</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://apksshare.com/wp-content/uploads/2021/06/Mercedes-me-APK-MOD-Download-1.12.0.png"
                style={{ width: 'auto', height: 300 }}
              />
              <Card.Body>
                <Card.Title>Collaborators</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Link to="/collaborators">
                  <Button variant="success">View Collaborators</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <br />
        <Row xs={1} md={1} className="g-4">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://nypost.com/wp-content/uploads/sites/2/2022/06/cj-stroud-gwagon-nil-deal-01.jpg"
                style={{ width: 'auto', height: 300 }}
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link to="/deals">
                  <Button variant="success">View Deals</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Home;
