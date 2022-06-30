import '../App.css';
import { useState } from 'react';
import NavBar from './NavBar';
import Container from './Container';
import Footer from './Footer';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div className="App">
      <NavBar />
      <Container currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Footer />
    </div>
  );
}

export default App;
