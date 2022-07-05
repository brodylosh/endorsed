import '../App.css';
import { useState } from 'react';
import NavBar from './NavBar';
import Container from './Container';
import Footer from './Footer';

function App() {
  const [currentUser, setCurrentUser] = useState();

  if (currentUser && currentUser.athlete) {
    console.log('athlete');
  } else if (currentUser && !currentUser.athlete) {
    console.log('collaborator');
  } else {
    console.log('no user');
  }

  return (
    <div className="App">
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Container currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Footer />
    </div>
  );
}

export default App;
