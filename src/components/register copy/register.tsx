import axios from "axios";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = "http://localhost:3001/register";

  const register = () => {
    const user = {
      username: username,
      password: password,
    };
    return axios

      .post(API_URL, {
        user,
        dataType: "JSON",
      })
      .then((response: any) => {
        console.log(response);
      });
  };

  return (
    <Container>
      <h1>Register</h1>
      <Form>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter username"
                  onChange={(e: any) => {
                    setUsername(e.target.value);
                  }}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={register}>
                Register
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Form>
    </Container>
  );
}

export default Register;
