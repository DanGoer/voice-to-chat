import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Alert from "../components/Alert";
import "./login.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        setErrorMsg("Please fill in the fields");
        return;
      }
      const {
        data: { user, session },
        error,
      } = await login(emailRef.current.value, passwordRef.current.value);
      if (error) setErrorMsg(error.message);
      if (user && session) navigate("/");
    } catch (error) {
      setErrorMsg("Email or Password Incorrect");
    }
    setLoading(false);
  };

  return (
    <section>
      <Card>
        <Card.Body>
          <div>
            <Card.Title>Login</Card.Title>
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input id="email" type="email" ref={emailRef} required />
              </label>
              <label>
                Password:
                <input
                  id="password"
                  type="password"
                  ref={passwordRef}
                  required
                />
              </label>
              {errorMsg && <Alert text="danger" onClose={setErrorMsg} />}
              <Button variant="primary" disabled={loading} type="submit">
                Login
              </Button>
            </form>
          </div>
          <div>
            Forgot Password?{" "}
            <Card.Link href={"/passwordreset"}>Click Here</Card.Link>
          </div>
          <div>
            New User? <Card.Link href={"/register"}>Register</Card.Link>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Login;
