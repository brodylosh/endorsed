import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Login({ setCurrentUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    fetch('/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.id) {
          // setCurrentBuyer(data);
          navigate('/deals');
        } else {
          setErrors(data.error);
        }
      });
  }

  return (
    <div className="Login">
      <Form className="rounded p-4 p-sm-3 form" onSubmit={login}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg">
          Log In
        </Button>
        <br></br>
        <h4>{errors}</h4>
        <br></br>
        <h4>New to NIL App?</h4>
        <Button
          size="lg"
          className="d-grid gap-2"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </Button>
        <br></br>
      </Form>
    </div>
  );
}

export default Login;
