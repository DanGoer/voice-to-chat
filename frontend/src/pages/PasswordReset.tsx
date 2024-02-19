import { useRef, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const PasswordReset = () => {
  const { passwordReset } = useAuth();
  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
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
    <section>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input id="email" type="email" ref={emailRef} required />
          </label>
          {msg && <Alert text="success" onClose={setMsg("")} />}
          <div>
            <button disabled={loading} type="submit">
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
      <div>
        Back to Login? <Link to={"/login"}>Login</Link>
      </div>
    </section>
  );
};

export default PasswordReset;
