import AudioRecorder from "../components/AudioRecorder";
import { useAuth } from "../context/AuthProvider";

function Home() {
  const { signOut } = useAuth();

  return (
    <div>
      <h1>React Media Recorder</h1>
      <div>
        <AudioRecorder />
        <button onClick={signOut}>logout</button>
      </div>
    </div>
  );
}

export default Home;
