import { Button } from 'react-bootstrap';
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
            <Button component={Link} to="/deals" variant="success">
              See Active Deals
            </Button>
          ) : (
            <Button component={Link} to="/signup" variant="success">
              Sign Up
            </Button>
          )}
        </div>
      </div>
      <div>
        <h1>Brief Overview</h1>
      </div>
      <div>
        <h1>View Athletes, Deals, Collaborators</h1>
      </div>
    </div>
  );
}

export default Home;
