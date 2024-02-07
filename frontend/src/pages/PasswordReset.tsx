import { useRef, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

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
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div id="email">
            <label>Email</label>
            <input type="email" ref={emailRef} required />
          </div>
          {msg && (
            <div variant="success" onClose={() => setMsg("")} dismissible>
              {msg}
            </div>
          )}
          <div className="text-center mt-2">
            <button disabled={loading} type="submit" className="w-50">
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
      <div className="w-100 text-center mt-2">
        Back to Login? <Link to={"/login"}>Login</Link>
      </div>
    </section>
  );
};

export default PasswordReset;
