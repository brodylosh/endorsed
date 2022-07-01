import '../App.css';
import { useState } from 'react';
import NavBar from './NavBar';
import Container from './Container';
import Footer from './Footer';

function App() {
  const [currentUser, setCurrentUser] = useState();

  function logOut() {
    setCurrentUser(null);
    fetch('/logout', {
      method: 'DELETE',
    });
  }

  return (
    <div className="App">
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Container currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <button onClick={logOut}>Log Out</button>
      <Footer />
    </div>
  );
}

export default App;
