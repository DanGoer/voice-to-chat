import { useRef, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import AuthWrapper from "../components/AuthWrapper";

const UpdatePassword = () => {
  const { updatePassword } = useAuth();
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!passwordRef.current?.value || !confirmPasswordRef.current?.value) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match. Try again");
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await updatePassword(passwordRef.current.value);
      if (!error) {
        navigate("/");
      }
    } catch (error) {
      setErrorMsg("Error in Updating Password. Please try again");
    }
    setLoading(false);
  };

  return (
    <AuthWrapper>
      <Card>
        <Card.Body>
          <div>
            <Card.Title>Update Password</Card.Title>
            <Form onSubmit={handleSubmit}>
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
                <Alert variant="danger" onClose={setErrorMsg} dismissible>
                  {errorMsg}
                </Alert>
              )}
              <div>
                <Button variant="primary" disabled={loading} type="submit">
                  Update
                </Button>
              </div>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </AuthWrapper>
  );
};

export default UpdatePassword;
