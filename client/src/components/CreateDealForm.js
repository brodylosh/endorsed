import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

function CreateDealForm({ currentUser }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [offer, setOffer] = useState(null);
  const [expirationDate, setExpirationDate] = useState(null);
  const [athleteId, setAthleteId] = useState(null);
  const [school, setSchool] = useState('');
  const [sport, setSport] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  function createDeal(e) {
    e.preventDefault();
    const deal = {
      collaborator_id: currentUser.id,
      athlete_id: athleteId,
      title: title,
      offer: offer,
      description: description,
      school: school,
      sport: sport,
      year: year,
      age: age,
      gender: gender,
      expiration_date: expirationDate,
      location: location,
      completed: false,
    };

    fetch('/deals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(deal),
    }).then((res) => {
      if (res.ok) {
        navigate('/deals');
      } else {
        res.json().then((data) => {
          setErrors(data.errors);
        });
      }
    });
  }

  return (
    <Form className="rounded p-4 p-sm-3 form" onSubmit={createDeal}>
      <h1>Create Deal</h1>
      <br />
      <Form.Group className="mb-3">
        <Form.Label>Title*</Form.Label>
        <Form.Control
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description*</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Deal description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <InputGroup className="mb-3 half-left">
        <Form.Label className="offer">Offer*</Form.Label>

        <InputGroup.Text>$</InputGroup.Text>
        <FormControl
          placeholder="0"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
        />
      </InputGroup>
      <Form.Group className="mb-3 half-right">
        <Form.Label>Expiration Date*</Form.Label>
        <Form.Control
          type="date"
          placeholder="Expiration"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Location*</Form.Label>
        <Form.Control
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>
      <br />
      <hr className="solid"></hr>
      <br />
      <h5>Optional Athlete Criteria</h5>
      <br />
      <Form.Group className="mb-3">
        <Form.Label>Athlete ID</Form.Label>
        <Form.Control
          placeholder="Athlete ID"
          value={athleteId}
          onChange={(e) => setAthleteId(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>School</Form.Label>
        <Form.Control
          placeholder="School"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3 half-left">
        <Form.Label>Sport</Form.Label>
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
        <Form.Label>Age</Form.Label>
        <Form.Control
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
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
      <br />
      <Form.Text muted>*required fields</Form.Text>
      <br />
      <br />
      {errors.map((error) => {
        return <p>{error}</p>;
      })}
      <Button variant="success" type="submit">
        Create Deal
      </Button>
      <br />
      <br />
    </Form>
  );
}

export default CreateDealForm;
