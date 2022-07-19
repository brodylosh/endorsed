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
      <div className="home-image-container">
        <img
          src="https://i.ibb.co/wMNSyzv/Michigan-State-Basketball-Huddle.jpg"
          className="home-image"
        />
        <div className="image-button">
          <Link to="/athletes">
            <Button variant="success" className="home-button" size="lg">
              View Athletes
            </Button>
          </Link>
        </div>
      </div>
      <div className="home-image-container">
        <img
          src="https://i.ibb.co/KxHWzVg/CJ-Stroud-Deal.jpg"
          className="home-image-right"
        />
        <div className="image-button-right">
          <Link to="/deals">
            <Button variant="success" className="home-button" size="lg">
              View Deals
            </Button>
          </Link>
        </div>
      </div>
      <div className="home-image-container">
        <img src="https://i.ibb.co/xmfyRtw/Nike.jpg" className="home-image" />
        <div className="image-button">
          <Link to="/collaborators">
            <Button variant="success" className="home-button" size="lg">
              View Collaborators
            </Button>
          </Link>
        </div>
      </div>
      <div className="get-endorsed-container">
        <h1 className="get-endorsed">get endorsed</h1>
      </div>
    </div>
  );
}

export default Home;
