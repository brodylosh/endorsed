import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import AthleteList from './AthleteList';
import DealList from './DealList';
import CollaboratorList from './CollaboratorList';

function Container({ currentUser, setCurrentUser }) {
  const [athleteList, setAthleteList] = useState([]);
  const [dealList, setDealList] = useState([]);
  const [collaboratorList, setCollaboratorList] = useState([]);

  useEffect(() => {
    fetch('/athletes')
      .then((resp) => resp.json())
      .then(setAthleteList);
    fetch('/deals')
      .then((resp) => resp.json())
      .then(setDealList);
    fetch('/collaborators')
      .then((resp) => resp.json())
      .then(setCollaboratorList);
  }, [currentUser]);

  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<Home currentUser={currentUser} />} />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/signup"
          element={
            <SignUp
              setCurrentUser={setCurrentUser}
              athleteList={athleteList}
              setAthleteList={setAthleteList}
              collaboratorList={collaboratorList}
              setCollaboratorList={setCollaboratorList}
            />
          }
        />
        <Route
          path="/athletes"
          element={
            <AthleteList currentUser={currentUser} athleteList={athleteList} />
          }
        />
        <Route
          path="/deals"
          element={<DealList currentUser={currentUser} dealList={dealList} />}
        />
        <Route
          path="/collaborators"
          element={
            <CollaboratorList
              currentUser={currentUser}
              collaboratorList={collaboratorList}
            />
          }
        />
      </Routes>
      <br />
    </div>
  );
}

export default Container;
