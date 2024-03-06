//register page
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { supabase } from "../supabase/client";
import AuthWrapper from "../components/AuthWrapper";

const Register = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const register = (email: string, password: string) =>
    supabase.auth.signUp({ email, password });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !passwordRef.current?.value ||
      !emailRef.current?.value ||
      !confirmPasswordRef.current?.value
    ) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match");
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await register(
        emailRef.current.value,
        passwordRef.current.value
      );
      if (!error && data) {
        setMsg(
          "Registration Successful. Check your email to confirm your account"
        );
      }
    } catch (error) {
      setErrorMsg("Error in Creating Account");
    }
    setLoading(false);
  };

  return (
    <AuthWrapper>
      <Card>
        <Card.Body>
          <div>
            <Card.Title>Register</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Email: </Form.Label>
                <Form.Control id="email" type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  id="password"
                  type="password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  id="confirm-password"
                  type="password"
                  ref={confirmPasswordRef}
                  required
                />
              </Form.Group>
              {errorMsg && (
                <Alert
                  variant="danger"
                  onClose={() => setErrorMsg("")}
                  dismissible
                >
                  {errorMsg}
                </Alert>
              )}
              {msg && (
                <Alert variant="success" onClose={() => setMsg("")} dismissible>
                  {msg}
                </Alert>
              )}
              <div>
                <Button variant="primary" disabled={loading} type="submit">
                  Register
                </Button>
              </div>
            </Form>
          </div>
          <div>
            Already a User?{" "}
            <Card.Link as={Link} to={"/login"}>
              Login
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </AuthWrapper>
  );
};

export default Register;
