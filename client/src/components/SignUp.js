import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Form, Button } from 'react-bootstrap';

function SignUp() {
  // User Type:
  const [userType, setUserType] = useState('athlete');

  // Athlete Fields:
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [athleteImage, setAthleteImage] = useState('');
  const [university, setUniversity] = useState('');
  const [sport, setSport] = useState('');
  const [year, setYear] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');

  // Collaborator Fields:
  const [name, setName] = useState('');
  const [collaboratorImage, setCollaboratorImage] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [remote, setRemote] = useState(false);

  // Universal Fields:
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Errors:
  const [errors, setErrors] = useState([]);

  // Functions:
  function athleteSignUp(e) {
    e.preventDefault();
    const athlete = {
      first_name: firstName,
      last_name: lastName,
      image: athleteImage,
      university: university,
      sport: sport,
      year: year,
      birthday: birthday,
      gender: gender,
      bio: bio,
      email: email,
      phone_number: phoneNumber,
      username: username,
      password: password,
      athlete: true,
    };
    fetch('/athletes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(athlete),
    }).then((res) => {
      if (res.ok) {
        res.json().then(console.log);
        // navigate('/');
      } else {
        res.json().then((data) => {
          console.log(data.errors);
          // setErrors(data.errors);
        });
      }
    });
  }

  function collaboratorSignUp(e) {
    e.preventDefault();
    const collaborator = {
      name: name,
      address: address,
      city: city,
      state: state,
      remote: remote,
      email: email,
      phone_number: phoneNumber,
      username: username,
      password: password,
    };
    fetch('/collaborators', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(collaborator),
    }).then((res) => {
      if (res.ok) {
        res.json().then(console.log);
        // navigate('/');
      } else {
        res.json().then((data) => {
          console.log(data.errors);
          // setErrors(data.errors);
        });
      }
    });
  }

  return (
    <div className="SignUp">
      {userType === 'athlete' ? (
        <Form className="rounded p-4 p-sm-3 form" onSubmit={athleteSignUp}>
          <h1>Sign Up</h1>
          <br></br>
          <ToggleButtonGroup
            color="primary"
            value={userType}
            exclusive
            onChange={(e) => setUserType(e.target.value)}
          >
            <ToggleButton value="athlete">Student-Athlete</ToggleButton>
            <ToggleButton value="collaborator">Collaborator</ToggleButton>
          </ToggleButtonGroup>
          <br></br>
          <br></br>
          <Form.Group className="mb-3 half-left">
            <Form.Label>First Name*</Form.Label>
            <Form.Control
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 half-right">
            <Form.Label>Last Name*</Form.Label>
            <Form.Control
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              value={athleteImage}
              onChange={(e) => setAthleteImage(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>University*</Form.Label>
            <Form.Control
              placeholder="University"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 half-left">
            <Form.Label>Sport*</Form.Label>
            <Form.Control
              placeholder="Sport"
              value={sport}
              onChange={(e) => setSport(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 half-right">
            <Form.Label>Year</Form.Label>
            <Form.Select value={year} onChange={(e) => setYear(e.target.value)}>
              <option></option>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
              <option value="Graduate">Graduate</option>
              <option value="Recruit">Recruit</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 half-left">
            <Form.Label>Birthday</Form.Label>
            <Form.Control
              type="date"
              placeholder="Birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 half-right">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-Binary">Non-Binary</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Biography</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Tell us about yourself..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 half-left">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="mail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 half-right">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <br></br>
          <hr class="solid"></hr>
          <br></br>
          <Form.Group className="mb-3">
            <Form.Label>Username*</Form.Label>
            <Form.Control
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password*</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text muted>
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
            <br></br>
            <br></br>
            <Form.Text muted>*required fields</Form.Text>
          </Form.Group>
          {errors.map((error) => {
            return <p>{error}</p>;
          })}
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
          <br></br>
          <br></br>
          <h4>Already a member?</h4>
          <NavLink to="/login" className="d-grid gap-2">
            <Button sz="lg">Log In</Button>
          </NavLink>
          <br></br>
        </Form>
      ) : (
        <Form className="rounded p-4 p-sm-3 form">
          <h1>Sign Up</h1>
          <br></br>
          <ToggleButtonGroup
            color="primary"
            value={userType}
            exclusive
            onChange={(e) => setUserType(e.target.value)}
          >
            <ToggleButton value="athlete">Student-Athlete</ToggleButton>
            <ToggleButton value="collaborator">Collaborator</ToggleButton>
          </ToggleButtonGroup>
          <br></br>
          <br></br>
          <Form.Group className="mb-3">
            <Form.Label>Name*</Form.Label>
            <Form.Control
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              value={collaboratorImage}
              onChange={(e) => setCollaboratorImage(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address*</Form.Label>
            <Form.Control
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 half-left">
            <Form.Label>City*</Form.Label>
            <Form.Control
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 half-right">
            <Form.Label>State*</Form.Label>
            <Form.Control
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Remote</Form.Label>
            <Form.Check
              type="switch"
              value={remote}
              onChange={(e) => setRemote(!remote)}
            />
          </Form.Group>
          <Form.Group className="mb-3 half-left">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="mail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 half-right">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <br></br>
          <hr class="solid"></hr>
          <br></br>
          <Form.Group className="mb-3">
            <Form.Label>Username*</Form.Label>
            <Form.Control
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password*</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text muted>
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
            <br></br>
            <br></br>
            <Form.Text muted>*required fields</Form.Text>
          </Form.Group>
          {errors.map((error) => {
            return <p>{error}</p>;
          })}
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
          <br></br>
          <br></br>
          <h4>Already a member?</h4>
          <NavLink to="/login" className="d-grid gap-2">
            <Button sz="lg">Log In</Button>
          </NavLink>
          <br></br>
        </Form>
      )}
    </div>
  );
}

export default SignUp;
