import { useState, useRef } from "react";
import { blobToBase64 } from "../utils/blobToBase64";

const mimeType: string = "audio/webm";

const AudioRecorder = () => {
  const [permission, setPermission] = useState<boolean>(false);
  const [stream, setStream] = useState<null | MediaStream>(null);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState<string>("inactive");
  const [audioChunks, setAudioChunks] = useState<any[]>([]);
  const [audio, setAudio] = useState<null | string>(null);
  const [text, setText] = useState<string>("");

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData: any = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = async () => {
    setRecordingStatus("recording");
    //create new Media recorder instance using the stream

    // @ts-expect-error aaa
    const media = new MediaRecorder(stream, { type: mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    //invokes the start method to start the recording process
    mediaRecorder.current.start();
    const localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    setRecordingStatus("inactive");
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
    };
  };

  const getText = async () => {
    try {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });

      const audioData = await blobToBase64(audioBlob);
      console.log("audiodata" + audioData);
      const response = await fetch("http://localhost:8080/api/speechToText/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          audio: audioData,
        }),
      }).then((res) => res.text());
      console.log("response", response);
      setText(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Audio Recorder</h2>
      <main>
        <div className="audio-controls">
          {!permission ? (
            <button onClick={getMicrophonePermission} type="button">
              Get Microphone
            </button>
          ) : null}
          {permission && recordingStatus === "inactive" ? (
            <button onClick={startRecording} type="button">
              Start Recording
            </button>
          ) : null}
          {recordingStatus === "recording" ? (
            <button onClick={stopRecording} type="button">
              Stop Recording
            </button>
          ) : null}
        </div>
        <button onClick={getText}>Send to BE</button>
        {audio ? (
          <div className="audio-container">
            <audio src={audio} controls></audio>
            <a download href={audio}>
              Download Recording
            </a>
          </div>
        ) : null}
        {text ? (
          <div>
            <p>Text:{text}</p>
          </div>
        ) : null}
      </main>
    </div>
  );
};
export default AudioRecorder;
