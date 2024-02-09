import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

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
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input id="email" type="email" ref={emailRef} required />
          </label>
          <label>
            Password:
            <input id="password" type="password" ref={passwordRef} required />
          </label>
          {errorMsg && (
            <div variant="danger" onClose={() => setErrorMsg("")} dismissible>
              {errorMsg}
            </div>
          )}
          <div>
            <button disabled={loading} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
      <div>
        Forgot Password? <Link to={"/passwordreset"}>Click Here</Link>
      </div>
      <div>
        New User? <Link to={"/register"}>Register</Link>
      </div>
    </section>
  );
};

export default Login;
