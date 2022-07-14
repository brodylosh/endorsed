import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import AthleteList from './AthleteList';
import DealList from './DealList';
import CreateDealForm from './CreateDealForm';
import CollaboratorList from './CollaboratorList';
import Requests from './Requests';
import Applications from './Applications';

function Container({ currentUser, setCurrentUser }) {
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
          element={<SignUp setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/athletes"
          element={<AthleteList currentUser={currentUser} />}
        />
        <Route path="/deals" element={<DealList currentUser={currentUser} />} />
        <Route
          path="/deals/create"
          element={<CreateDealForm currentUser={currentUser} />}
        />
        <Route
          path="/collaborators"
          element={<CollaboratorList currentUser={currentUser} />}
        />
        {currentUser && currentUser.athlete ? (
          <Route
            path="/requests"
            element={<Requests currentUser={currentUser} />}
          />
        ) : null}
        {currentUser && !currentUser.athlete ? (
          <Route
            path="/applications"
            element={<Applications currentUser={currentUser} />}
          />
        ) : null}
      </Routes>
      <br />
    </div>
  );
}

export default Container;
