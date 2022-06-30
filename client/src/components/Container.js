import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import AthleteList from './AthleteList';
import DealList from './DealList';
import CollaboratorList from './CollaboratorList';

function Container({ setCurrentUser }) {
  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/signup"
          element={<SignUp setCurrentUser={setCurrentUser} />}
        />
        <Route path="/athletes" element={<AthleteList />} />
        <Route path="/deals" element={<DealList />} />
        <Route path="/collaborators" element={<CollaboratorList />} />
      </Routes>
    </div>
  );
}

export default Container;
