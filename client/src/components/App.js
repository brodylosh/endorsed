import '../App.css';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Container from './Container';
import Footer from './Footer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then(setCurrentUser);
      }
    });
  }, []);

  return (
    <div className="App">
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Container currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Footer />
    </div>
  );
}

export default App;
