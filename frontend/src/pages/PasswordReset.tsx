//password reset page
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useAuth } from "../context/AuthProvider";
import AuthWrapper from "../components/AuthWrapper";

const PasswordReset = () => {
  const { passwordReset } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await passwordReset(emailRef.current.value);
      console.log(error);
      console.log(data);
      setMsg("Password reset has been sent to your email");
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <AuthWrapper>
      <Card>
        <Card.Body>
          <div>
            <Card.Title>Login</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control id="email" type="email" ref={emailRef} required />
              </Form.Group>
              {msg && (
                <Alert variant="success" onClose={() => setMsg("")} dismissible>
                  {msg}
                </Alert>
              )}
              <div>
                <Button variant="primary" disabled={loading} type="submit">
                  Send Reset Link
                </Button>
              </div>
            </Form>
          </div>
          <div>
            Back to Login?{" "}
            <Card.Link as={Link} to={"/login"}>
              Login
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </AuthWrapper>
  );
};

export default PasswordReset;
