import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Login(props) {
  const username = useFormInput("");
  const password = useFormInput("");
 

  // handle button click of login form
  const handleLogin = () => {
    props.history.push("/Order");
  };

  return (
    <Container fluid="md" className="my-3">
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="text"
                {...username}
                placeholder="Enter your name"
              />
              <Form.Text className="text-muted">
                We'll never share your details with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                {...password}
                placeholder="Password"
              />
            </Form.Group>
            <Button className="btn_lgn"
              variant="success"
              type="submit"
              onClick={handleLogin}
            >
              Submit
            </Button>
            <p className="text-center" onClick={handleLogin}><span>Will do later </span></p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
