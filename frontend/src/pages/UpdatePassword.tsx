import { useRef, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const UpdatePassword = () => {
  const { updatePassword } = useAuth();
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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
    <section>
      <div>
        <h2>Update Password</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Password:
            <input id="password" type="password" ref={passwordRef} required />
          </label>
          <label>
            Confirm Password:
            <input
              id="confirm-password"
              type="password"
              ref={confirmPasswordRef}
              required
            />
          </label>
          {errorMsg && <Alert text="danger" onClose={setErrorMsg} />}
          <div>
            <button disabled={loading} type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdatePassword;
