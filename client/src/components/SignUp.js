import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Form, Button } from 'react-bootstrap';

function SignUp({ setCurrentUser }) {
  const [userType, setUserType] = useState('athlete');

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  function athleteSignUp(e) {
    e.preventDefault();
    const athleteData = new FormData();
    athleteData.append('athlete[first_name]', e.target.first_name.value);
    athleteData.append('athlete[last_name]', e.target.last_name.value);
    athleteData.append(
      'athlete[image]',
      e.target.image.files[0],
      e.target.image.value
    );
    athleteData.append('athlete[university]', e.target.university.value);
    athleteData.append('athlete[sport]', e.target.sport.value);
    athleteData.append('athlete[year]', e.target.year.value);
    athleteData.append('athlete[birthday]', e.target.birthday.value);
    athleteData.append('athlete[gender]', e.target.gender.value);
    athleteData.append('athlete[biography]', e.target.biography.value);
    athleteData.append('athlete[email]', e.target.email.value);
    athleteData.append('athlete[phone_number]', e.target.phone_number.value);
    athleteData.append('athlete[username]', e.target.username.value);
    athleteData.append('athlete[password]', e.target.password.value);
    athleteData.append('athlete[athlete]', true);
    fetch('/athletes', {
      method: 'POST',
      body: athleteData,
    }).then((res) => {
      if (res.ok) {
        res.json().then(setCurrentUser);
        navigate('/');
      } else {
        res.json().then((data) => {
          setErrors(data.errors);
        });
      }
    });
  }

  function collaboratorSignUp(e) {
    e.preventDefault();
    const collaboratorData = new FormData();
    collaboratorData.append('collaborator[name]', e.target.name.value);
    collaboratorData.append(
      'collaborator[image]',
      e.target.image.files[0],
      e.target.image.value
    );
    collaboratorData.append('collaborator[address]', e.target.address.value);
    collaboratorData.append('collaborator[remote]', e.target.remote.value);
    collaboratorData.append('collaborator[email]', e.target.email.value);
    collaboratorData.append(
      'collaborator[phone_number]',
      e.target.phone_number.value
    );
    collaboratorData.append('collaborator[username]', e.target.username.value);
    collaboratorData.append('collaborator[password]', e.target.password.value);
    fetch('/collaborators', {
      method: 'POST',
      body: collaboratorData,
    }).then((res) => {
      if (res.ok) {
        res.json().then(setCurrentUser);
        navigate('/');
      } else {
        res.json().then((data) => {
          setErrors(data.errors);
        });
      }
    });
  }

  return (
    <div className="SignUp">
      {userType === 'athlete' ? (
        <Form className="rounded p-4 p-sm-3 form" onSubmit={athleteSignUp}>
          <h1>Sign Up</h1>
          <br />
          <ToggleButtonGroup
            color="success"
            value={userType}
            exclusive
            onChange={(e) => setUserType(e.target.value)}
          >
            <ToggleButton value="athlete">Student-Athlete</ToggleButton>
            <ToggleButton value="collaborator">Collaborator</ToggleButton>
          </ToggleButtonGroup>
          <br />
          <br />
          <Form.Group className="mb-3 half-left">
            <Form.Label>First Name*</Form.Label>
            <Form.Control placeholder="First Name" name="first_name" />
          </Form.Group>
          <Form.Group className="mb-3 half-right">
            <Form.Label>Last Name*</Form.Label>
            <Form.Control placeholder="Last Name" name="last_name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" name="image" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>University*</Form.Label>
            <Form.Control placeholder="University" name="university" />
          </Form.Group>
          <Form.Group className="mb-3 half-left">
            <Form.Label>Sport*</Form.Label>
            <Form.Control placeholder="Sport" name="sport" id="sport" />
          </Form.Group>
          <Form.Group className="mb-3 half-right">
            <Form.Label>Year</Form.Label>
            <Form.Select name="year">
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
            <Form.Control type="date" placeholder="Birthday" name="birthday" />
          </Form.Group>
          <Form.Group className="mb-3 half-right">
            <Form.Label>Gender</Form.Label>
            <Form.Select placeholder="Gender" name="gender">
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
              name="biography"
            />
          </Form.Group>
          <Form.Group className="mb-3 half-left">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="mail@example.com" name="email" />
          </Form.Group>
          <Form.Group className="mb-3 half-right">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="Phone Number" name="phone_number" />
          </Form.Group>
          <br />
          <hr className="solid"></hr>
          <br />
          <Form.Group className="mb-3">
            <Form.Label>Username*</Form.Label>
            <Form.Control placeholder="Username" name="username" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password*</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
            <Form.Text muted>
              *must be atleast 8 characters and contain: one uppercase letter,
              one lowercase letter, one number, & one symbol
            </Form.Text>
            <br />
            <br />
            <Form.Text muted>*required fields</Form.Text>
          </Form.Group>
          {errors.map((error) => {
            return <p>{error}</p>;
          })}
          <Button variant="success" type="submit">
            Sign Up
          </Button>
          <br />
          <br />
          <h4>Already a member?</h4>
          <div className="d-grid gap-2">
            <Button
              size="lg"
              variant="outline-success"
              onClick={() => navigate('/login')}
            >
              Log In
            </Button>
          </div>
          <br />
        </Form>
      ) : (
        <Form className="rounded p-4 p-sm-3 form" onSubmit={collaboratorSignUp}>
          <h1>Sign Up</h1>
          <br />
          <ToggleButtonGroup
            color="success"
            value={userType}
            exclusive
            onChange={(e) => setUserType(e.target.value)}
          >
            <ToggleButton value="athlete">Student-Athlete</ToggleButton>
            <ToggleButton value="collaborator">Collaborator</ToggleButton>
          </ToggleButtonGroup>
          <br />
          <br />
          <Form.Group className="mb-3">
            <Form.Label>Name*</Form.Label>
            <Form.Control placeholder="Name" name="name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" name="image" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address*</Form.Label>
            <Form.Control placeholder="Address" name="address" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Remote</Form.Label>
            <Form.Check
              type="switch"
              name="remote"
              defaultChecked="false"
              // value={false}
              onChange={(e) => console.log(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 half-left">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="mail@example.com" name="email" />
          </Form.Group>
          <Form.Group className="mb-3 half-right">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="Phone Number" name="phone_number" />
          </Form.Group>
          <br />
          <hr className="solid"></hr>
          <br />
          <Form.Group className="mb-3">
            <Form.Label>Username*</Form.Label>
            <Form.Control placeholder="Username" name="username" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password*</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
            <Form.Text muted>
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
            <br />
            <br />
            <Form.Text muted>*required fields</Form.Text>
          </Form.Group>
          {errors.map((error) => {
            return <p>{error}</p>;
          })}
          <Button variant="success" type="submit">
            Sign Up
          </Button>
          <br />
          <br />
          <h4>Already a member?</h4>
          <div className="d-grid gap-2">
            <Button
              size="lg"
              variant="outline-success"
              onClick={() => navigate('/login')}
            >
              Log In
            </Button>
          </div>
          <br />
        </Form>
      )}
    </div>
  );
}

export default SignUp;
