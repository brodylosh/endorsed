import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  return (
    <div className="Login">
      <Form className="rounded p-4 p-sm-3 form">
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
        <NavLink to="/signup" className="d-grid gap-2">
          <Button size="lg" to="/signup">
            Sign Up
          </Button>
        </NavLink>
        <br></br>
      </Form>
    </div>
  );
}

export default Login;
